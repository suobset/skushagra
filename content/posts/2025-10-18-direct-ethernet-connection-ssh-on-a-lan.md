---
title: "Direct Ethernet Connection: SSH on a LAN"
date: 2025-10-18T23:17:00+00:00
draft: false
tags: ["Code", "Hardware", "Open Source", "Software", "Systems"]
url: "/2025/10/direct-ethernet-connection-ssh-on-lan.html"
---
![Image](/images/SSHONALAN.jpg)

Transformer Lab Server and STORMM Compilation all running on the CUDA laptop, with the Mac as a frontend (Terminal, TL frontend, and BBEdit). The two computers connect across a LAN using 1 direct Ethernet cable, and SSH.

Quick guide for setting up a direct Ethernet link between my Mac mini and Asus gaming laptop so I can SSH into the Asus from the Mac. Both machines stay connected to WiFi for internet, but are connected to each other via a direct Ethernet cable,

This is a fairly straightforward method to set up a local SSH server (Asus, in this case), and a client (Mac). It's mores here for my own personal referral in the future, and skips over a lot of security measures you would take to set up a SSH machine out on the open Internet.

## Why?
When I'm working remotely and RDP and/or SSH into the Mac mini, I can then SSH from there into my Asus without needing to lug the heavy laptop around. Also since all of the Nvidia work I do is via a CLI, a KVM switch for the desk and/or setting up 2 RDPs is overkill. Lastly, I love [BBEdit](https://www.barebones.com/products/bbedit/) and its [Shell Worksheets](https://www.barebones.com/products/bbedit/benefitsintegrate.html#worksheet), and want to retain that workflow for my Linux needs too.

The Mac has [Parsec](https://parsec.app) set up for Remote Access when I am away from my desk. This allows me to access even my GPU machine through the same channels.

Lastly, the main reason to even do all of this in the first place is to be able to train local AI models (LLMs) using [Transformer Lab](https://lab.cloud) Server on the 5060, as well as contribute to [STORMM](https://stormm.psivant.com) and do all funky sorts of GPU & AI programming, all while keeping only one point of entry to manage everything logistically: the Mac. 

[![Image](/images/Scrn1.jpeg)](/images/Scrn1.jpeg)

Pretty neat! 

## Setup

### On the Asus (Ubuntu)
**1. Find your Ethernet interface name:**

```
`ip link show`
```
Output looks like this:

```
`1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp109s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether bc:fc:e7:e4:2c:d2 brd ff:ff:ff:ff:ff:ff
    altname enxbcfce7e42cd2
4: wlp108s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DORMANT group default qlen 1000
    link/ether 4c:23:38:59:4f:4b brd ff:ff:ff:ff:ff:ff
    altname wlx4c2338594f4b`
```
Look for the interface that's NOT `lo` (loopback) and NOT the WiFi one (usually starts with `wl`). Mine is `enp109s0` - that's the Ethernet port. Yours might be different like `eth0`, `eno1`, etc.

**2. Edit the netplan config:**

```
`sudo vim /etc/netplan/01-network-manager-all.yaml`
```
**3. Add this at the end (replace `enp109s0` with your interface name):**

```
`network:
  version: 2
  ethernets:
    enp109s0: # Make sure this is your ethernet interface
      addresses:
        - 192.168.100.2/24 # Arbitrary as long as in private IP range
      dhcp4: no`
```
Leave everything else in the file as-is. Your WiFi config stays untouched.

**4. Apply the changes:**

```
`sudo netplan apply`
```
**5. Verify it worked:**

```
`ip addr show enp109s0`
```
You should see output like this:

```
`2: enp109s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether bc:fc:e7:e4:2c:d2 brd ff:ff:ff:ff:ff:ff
    altname enxbcfce7e42cd2
    inet 192.168.100.2/24 brd 192.168.100.255 scope global noprefixroute enp109s0
       valid_lft forever preferred_lft forever
    inet6 fe80::befc:e7ff:fee4:2cd2/64 scope link proto kernel_ll 
       valid_lft forever preferred_lft forever`
```
The key line is `inet 192.168.100.2/24` - that's your static IP address on the Ethernet interface.

[![](/images/AVvXsEjWl7U99737foFyJracxkDIQPTw2ltt0rqvpbHGDSq-tB6KfFms_BGvr7agMD3TpaWocqkAhlL-SrEIJjKucHjgHkhqAM-zZT79GxR1OdyDpssbIM18ku7tRqKCn_okI7kSU51LgpmA9pLaz3uOrf2HoRdggfQX26BqOBjzYr7HBQPSiTPbQq4xDIMHf5U=w640-h130)](/images/AVvXsEjWl7U99737foFyJracxkDIQPTw2ltt0rqvpbHGDSq-tB6KfFms_BGvr7agMD3TpaWocqkAhlL-SrEIJjKucHjgHkhqAM-zZT79GxR1OdyDpssbIM18ku7tRqKCn_okI7kSU51LgpmA9pLaz3uOrf2HoRdggfQX26BqOBjzYr7HBQPSiTPbQq4xDIMHf5U)

**6. Install and enable SSH server:**

```
`sudo apt update
sudo apt install openssh-server
sudo systemctl start ssh
sudo systemctl enable ssh`
```
**7. Check it's running:**

```
`sudo systemctl status ssh`
```
Should see something like:

```
`● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
     Active: active (running) since ...`
```
Look for "active (running)" in green - that means SSH is up and ready.

![Image](/images/activerunning.jpg)

### On the Mac mini

1. Open **System Settings → Network**
1. Click on your **Ethernet** adapter
1. Click **Details**
1. Under **TCP/IP** tab: 
  1. Configure IPv4: **Manually**
  1. IP Address: `192.168.100.1`
  1. Subnet Mask: `255.255.255.0`
  1. Router: *leave blank*
  1. DNS: *leave blank*

1. Click **OK**, then **Apply ***[Footnote 1 for settings]*

### [![](/images/AVvXsEhGFkjDYcvPBFcTabq93B5OLAGc4Zucbvg7TgSkqPJNt9U_RYCgKzhFCsEkrNZZqGbMiQ7IoGimBweS2OPJbDiWjH7liQUttGGdxgUpbQLbqEXaz762sZsfA0O1Hyfx5sco4lDWK1q_6T-2JOulx1NLXCjUea41YyEYR3GXTAk-QGI9206eHVttpUfIIBo=w640-h565)](/images/AVvXsEhGFkjDYcvPBFcTabq93B5OLAGc4Zucbvg7TgSkqPJNt9U_RYCgKzhFCsEkrNZZqGbMiQ7IoGimBweS2OPJbDiWjH7liQUttGGdxgUpbQLbqEXaz762sZsfA0O1Hyfx5sco4lDWK1q_6T-2JOulx1NLXCjUea41YyEYR3GXTAk-QGI9206eHVttpUfIIBo)

### Test it
From the Mac mini:

```
`ping 192.168.100.2`
```
Should get responses like:

[![](/images/AVvXsEjmanysmhy0IGXhI25kBOJyrYmyJhp8n-1ytg2WxtJ6Ul-aDmUNNTaGm9ULIWLpqgeJk8zFki3HP3_Wp2c5OA_Wip2tCZpg96LqLZzVmuqyAB-0e0fceU-7fZnLeYVNMCGvc4Uu5r9TNn3LCaU9y1RER3v6Vv7BT7Gumh9EcL-NZoE57NQQy6JEGINaGMY=w640-h232)](/images/AVvXsEjmanysmhy0IGXhI25kBOJyrYmyJhp8n-1ytg2WxtJ6Ul-aDmUNNTaGm9ULIWLpqgeJk8zFki3HP3_Wp2c5OA_Wip2tCZpg96LqLZzVmuqyAB-0e0fceU-7fZnLeYVNMCGvc4Uu5r9TNn3LCaU9y1RER3v6Vv7BT7Gumh9EcL-NZoE57NQQy6JEGINaGMY)

Then try SSH:

```
`ssh suobset@192.168.100.2`
```
First time you'll get a prompt about authenticity of the host - type `yes`. Then enter your password and you're in!

Should work! Both machines still use WiFi for internet, the Ethernet is just for the direct link.

## Reversing/Removing the Setup

### On the Asus
**1. Edit the netplan file again:**

```
`sudo nano /etc/netplan/01-network-manager-all.yaml`
```
**2. Remove the entire `ethernets` section** you added (the enp109s0 block) (also in my case, this is the only block, so can just remove it entirely)

**3. Apply:**

```
`sudo netplan apply`
```
**4. If you want to disable SSH server:**

```
`sudo systemctl stop ssh
sudo systemctl disable ssh`
```

### On the Mac mini

1. Go to **System Settings → Network**
1. Select the **Ethernet** adapter
1. Click **Details**
1. Change Configure IPv4 back to **Using DHCP**
1. Click **OK** and **Apply**

That's it - everything should be back to normal!

## Notes

- The IP addresses (192.168.100.1 and .2) are arbitrary - you can pick any private IP range that doesn't conflict with your WiFi network. Just make sure both devices are on the same subnet.
- You might not need a crossover cable - most modern Ethernet ports auto-detect (Auto-MDIX). Regular cable works fine for me.
- If SSH keeps refusing connections, check the firewall: `sudo ufw status` and allow port 22 if needed: `sudo ufw allow 22/tcp`
- When you SSH in, all your internet traffic (apt updates, downloads, etc.) goes through WiFi automatically. The Ethernet is just for the Mac ↔ Asus connection

## Footnotes

1.

![Image](/images/macsettingsssh.jpg)
