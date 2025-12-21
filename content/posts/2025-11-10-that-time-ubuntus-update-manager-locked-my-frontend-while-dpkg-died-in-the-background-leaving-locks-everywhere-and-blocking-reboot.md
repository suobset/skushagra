---
title: "That time Ubuntu’s Update Manager locked my Frontend while dpkg died in the background - leaving locks everywhere and blocking reboot"
date: 2025-11-10T15:22:00+00:00
draft: false
tags: ["Systems", "Software", "Open Source"]
url: "/2025/11/the-time-when-ubuntus-update-manager.html"
---
[![](/images/AVvXsEj_5EOFMINhcQ4zEtf0mIyy8IdyQPU5kA2MWFMXgqX7Wx26TgLrpUNEZ45a4zy5tvBUb9v6xE6vgjA6npdWxcbm8ai5tlrmsROniIs7NQdLKtjC8fDQxGgKDaIhQCB3lOboRbrEt3aLFKMkuAP02WGpT-558Hjt7bRXmh-VHqnwYG9ByhsORJdllEDqBog=w640-h454)](/images/AVvXsEj_5EOFMINhcQ4zEtf0mIyy8IdyQPU5kA2MWFMXgqX7Wx26TgLrpUNEZ45a4zy5tvBUb9v6xE6vgjA6npdWxcbm8ai5tlrmsROniIs7NQdLKtjC8fDQxGgKDaIhQCB3lOboRbrEt3aLFKMkuAP02WGpT-558Hjt7bRXmh-VHqnwYG9ByhsORJdllEDqBog)

This post is half sysadmin note, half personal reminder.

Every so often, Ubuntu’s desktop GUI based update process (Update Manager) will hang mid-upgrade -> the GNOME session stops responding, the display freezes, and it looks like a hard crash. But in reality, the underlying system is fine. You know this because the fans are spinning on full speed, the cursor is active, you can still SSH in (or switch to a TTY), `ps` shows a live process table, and `systemd` is dutifully blocking shutdowns because it’s protecting the package database. 

It’s one of those moments where you realize how much of the Ubuntu desktop is just thin layers on top of perfectly stable plumbing.

---

### What actually happens when Ubuntu “freezes” mid-update
Ubuntu’s GUI update tool (`update-manager`) is basically a frontend to `aptd`, which itself manages a single long-lived `dpkg` session. That `dpkg` process owns a couple of locks under `/var/lib/dpkg/lock*`, and while those are held, `systemd` knows not to let you reboot - it treats them as “inhibitors.”

If you try `sudo reboot` in that state, you’ll see messages like:

```
`Operation inhibited by "UpdateManager"
Operation inhibited by "APT"`
```
*That’s not a bug, it’s a* [safety] *feature* [of systemd]. It’s preventing a mid-transaction reboot that could corrupt the package database in the best case, or render your system unbeatable because *initramfs *was mid-update in the worst case (requiring a whole OS reinstall).

The problem is: if GNOME freezes (for example, a compositor crash, GPU driver reset, or a hanging post-install `debconf` prompt), `update-manager` never finishes, and the inhibitors never clear. So the system sits there in limbo: the desktop is unresponsive, and reboots are “inhibited,” but the OS itself is fine.

---

### Common triggers
From what I’ve seen, these freezes tend to happen when:

- A GUI package (`update-manager`, `software-properties-gtk`, etc.) is running in a full desktop session, and something goes wrong in the compositor (common with hybrid graphics laptops).
- `dpkg` is waiting on an interactive `debconf` prompt (e.g., a post-install script for something like LibreOffice, NVIDIA drivers, or DKMS modules). The GUI frontend never passes the input through, and it just hangs.
- Multiple `aptd` daemons start (sometimes the Update Manager double-launches).
- The lock holder (`/usr/bin/dpkg`) exits abnormally, leaving `systemd` thinking it’s still busy.

You can’t fix this from the GUI because the GUI *is* the thing that’s broken. SSH access is your friend.

---

### Why I could still fix it easily
[I keep a direct Ethernet link between my Mac mini and the Asus gaming laptop](https://www.skushagra.com/2025/10/direct-ethernet-connection-ssh-on-lan.html). Both stay on Wi-Fi for internet, but the Ethernet is a static local link: no router, no DHCP. Just two static IPs (say, 192.168.100.1 on the Mac and 192.168.100.2 on the Asus).

That gives me a private LAN for SSH, scp, or rsync that works even if Wi-Fi drops or NetworkManager misbehaves. When I am remote, I RDP into the Mac mini which gives me the same setup to work with both machines. 

**So when the GNOME desktop froze, I just jumped in via SSH from the Mac and cleaned it up remotely. **If it was accepting SSH connections, it means the system was not broken. The Desktop Environment, in fact, was locked by dpkg to facilitate the update process but the update process itself was idling.

---

### Diagnosing the freeze
When the desktop is unresponsive but SSH works, check what’s running:

```
`[](#cb2-1)ps aux | grep -E 'update-manager|aptd|dpkg'`
```

You’ll usually see something like:

```
`/usr/bin/python3 /usr/bin/update-manager
/usr/bin/python3 /usr/sbin/aptd
/usr/bin/dpkg --status-fd 74 --configure --pending`
```
If they’re sitting at 0% CPU and not touching disk, they’re idle (and likely stuck). `systemd-inhibit --list` will confirm they’re holding reboot locks.

---

### Recovery steps

1. **Kill the stuck update processes**

```
`[](#cb4-1)sudo kill <PID>
[](#cb4-2)sudo kill -9 <PID>   # only if the first doesn’t work`
```

1. **Repair the package system**

```
`[](#cb5-1)sudo dpkg --configure -a
[](#cb5-2)sudo apt-get install -f`
```

These commands finish incomplete package installs and fix broken dependencies.

1. **If dpkg refuses to run** You might see something like:

```
`dpkg: error: dpkg frontend lock was locked by PID 17110`
```
That means another `dpkg` or `aptd` process is still holding the lock. Check it:

```
`[](#cb7-1)ps -fp 17110`
```

If it’s idle, kill it.

1. **Check for hanging post-install scripts** Sometimes the last process left will look like:

```
`/usr/bin/perl /usr/share/debconf/frontend /var/lib/dpkg/info/libreoffice-calc.postinst`
```
That’s a leftover post-install script. If it’s been idle for minutes, kill it too:

```
`[](#cb9-1)sudo kill <PID>`
```

1. **Clean up again**

```
`[](#cb10-1)sudo dpkg --configure -a
[](#cb10-2)sudo apt-get install -f
[](#cb10-3)sudo apt update
[](#cb10-4)sudo apt full-upgrade`
```

1. **Reboot cleanly**

```
`[](#cb11-1)sudo reboot`
```

If it still refuses:

```
`[](#cb12-1)sudo systemctl reboot -I`
```

```
`[![](/images/AVvXsEg3DM7S5G8ErLl-_UMKhRw53hqjPo490a4OQbU7jMsulImTAHO2xa5V5eAjupjr2m5_yZ_eHTqQRLLcIYRe7w8MEpS5piV2OG0d-WTor8ZVqor_EULJGZP4E_9-q6gdupC5xq-InK1wkOdx1vZ55iVk-_sea-NafZGVTKvCkUn5J4yPvR6tt_DTuHKESBs=w640-h454)](/images/AVvXsEg3DM7S5G8ErLl-_UMKhRw53hqjPo490a4OQbU7jMsulImTAHO2xa5V5eAjupjr2m5_yZ_eHTqQRLLcIYRe7w8MEpS5piV2OG0d-WTor8ZVqor_EULJGZP4E_9-q6gdupC5xq-InK1wkOdx1vZ55iVk-_sea-NafZGVTKvCkUn5J4yPvR6tt_DTuHKESBs)

`
```

---

### Why this matters
Ubuntu’s safety mechanisms actually work; they just don’t degrade gracefully when the GUI layer crashes. Everything under the hood (APT, systemd, SSH) behaves predictably, but the desktop tools stop communicating with them.

As long as you can SSH in, you can recover cleanly without risking the package database.

And if you have a direct local network link (like the Ethernet bridge between my Mac and Asus), you’ll never lose access even when the main network stack goes down.

---

### TL;DR
If Ubuntu freezes mid-update:

- Don’t force power-off.
- SSH in.
- Kill `update-manager`, `aptd`, or any idle `dpkg` processes.
- Run `dpkg --configure -a` and `apt-get install -f`.
- Reboot.

If you're curious how I realized I needed an update in the first place? Non-working Nvidia driver that was fine just a couple weeks ago:

[![](/images/AVvXsEj79wAgtroosDdZeESAwOmaxgriJN1UZk4N7EKgEf0T4lLtMgla601BuhL2Qir7ctFqe64u7VA5KwJdj2iMqUk-9A1_TSs4UhH9SebGupXMzBTfjHygGnnmTJ2ogSe4B90v7Plz_cJxkWJrwjJ144V37KEILkPsiEA-fT46g5yriwt4v2Xy8LvTOk4ECnM=w640-h360)](/images/AVvXsEj79wAgtroosDdZeESAwOmaxgriJN1UZk4N7EKgEf0T4lLtMgla601BuhL2Qir7ctFqe64u7VA5KwJdj2iMqUk-9A1_TSs4UhH9SebGupXMzBTfjHygGnnmTJ2ogSe4B90v7Plz_cJxkWJrwjJ144V37KEILkPsiEA-fT46g5yriwt4v2Xy8LvTOk4ECnM)
