---
title: "Mainframe. Cloud. iPadOS 26 Mobile Productivity Setup."
date: 2025-09-11T02:57:00+00:00
draft: false
tags: ["Code", "Hardware", "Software", "Open Source", "Life", "Systems"]
url: "/2025/09/mainframe-computing.html"
---
[![Image](/images/IMG_0141.png)](/images/IMG_0141.png)

In the world of developers and engineers, a spirited debate often rages over which operating system reigns supreme. You'll hear Mac users praise macOS, Windows loyalists defend their OS, and Linux aficionados swear by their distro, convinced it's the one true way.

I believe this passion stems from two core ideas:

- **Group Identity:** We're wired to identify with a group. Mac users see themselves as a group, Windows users as another, and Linux users — especially those dedicated to a specific distro — most definitely feel like a tribe. This shared identity fuels the belief that their OS is the "right" one.

- **Human-Centric Design:** At its core, a computer is a tool to help us get things done. Most of us just want a smooth, reliable experience.

Given my major, career path, and general nerdiness, I spend a lot of time on computers. This is why it always raises a few eyebrows when I admit that my preferred **mobile** OS is iPadOS. This is often met with a knowing look that says, "That's cute, but you can't *actually* do anything with it."

I am here to prove this wrong, while still maintaining the stance that the iPad is best suited as a companion device. It’s just that the iPad, as a companion device, can still do much more than what most of us use it for (content consumption and notetaking).

Yes, you still need a companion Mac/PC to go along this setup, the iPad alone cannot do everything. Yes, the iPad **can become the only device in your backpack. **Whether it’s for daily commutes, or for long haul flights. Here’s how.

### Some Context

To largely understand where I am coming from, I believe that I should take a moment to explain my perspectives and history. Through trials and tribulations, I have come to a point where I have a setup which requires a Mac (Xcode, Darwin), Linux (Ubuntu for [STORMM](https://stormm.psivant.com/), LLM fine-tuning, CUDA; Alpine for docker containers and mobile workloads), and Windows (to run the 3 32-bit applications once in a blue moon). As part of almost everything I do, my setup consists of a heavy dual-booted gaming laptop with a 5060, a Mac mini, and the iPad (base, A16) we are talking about. 

A keyboard and mouse are recommended with the iPad. I use external peripherals with the iPad as I personally find Apple’s Magic Keyboard cases too expensive (but they aren’t bad at all, should you prefer them).

You may notice the lack of a thin and light laptop, and this is a conscious choice born solely out of the fact that **I do not want any duplication in my setup.**

The MacBook is a great laptop, with amazing battery, and I have absolutely nothing against it. However, I like to travel light. Really light.

And if it comes down to wanting to take only one device when mobile: it is the iPad. I use it for notetaking, sketching, writing sheet music, and editing photos on the go (on an amateur scale). However, I also miss aspects of having a full file system, a Terminal, and the ability to download/write/run any code and software as I please.

If you look at the user base of the iPad, these limitations are a feature. They are a feature because they create a simpler, safer, and more curated experience. These limitations genuinely empower tons of users to be able to interact on the Internet everyday, without having as big of a learning curve. They don't have to worry about malicious software or managing complex file hierarchies. I recommend the iPad + keyboard to any person I meet who has basic needs, since even clicking on spam ads will not give you a virus. It’s a beautifully designed consumption device, and a great creation tool for specific, self-contained tasks like art, music, and writing. But the true power of the iPad for a professional user lies in how it transcends this simple-to-use-on-the-surface paradigm. It’s a sophisticated tool for those who know how to use it.

### Truck Stuff, using a Car

When I started setting up the iPad in a way that would fulfill my needs without creating friction, I realized that my use cases could be separated into two parts.

1. Admin Access Parts: during programming, I need an open traditional desktop environment. This could be command line only for my Linux workflows, and/or a GUI based setup for my Mac workflows.

1. iPad Apps: For anything that does not need access to UNIX or a full file system. In fact, the iPad counterparts of a lot of this software—music, video, photo production—have been increasingly more enjoyable on the iPad due to their touch focused nature.

I set up my iPad with four main additions that enhance the experience, and make this the only device I need to carry. Most importantly, I do this with **zero jailbreaks or tweaks.**

As mentioned, the device I am running is a standard base model iPad (A16) with the iPadOS 26 Beta. Before this, I had the same workflow on an iPad mini (minus the Mac GUI RDP since the screen was constrained), and on an iPad 9th generation even before that (though the latter two were never primarily used in this way).

I like keeping the OS standard, as jailbreaking introduces potential for unwanted crashes and debugging. Here’s the plethora of apps that help give me the optimal programming workflow:

- **[iSH](https://ish.app)**: A QEMU instance running the x86 version of Alpine Linux. Great for minimal on the go tasks: jotting notes in vim, git workflows, documentation, and writing C/C++. This also enables you to run web servers on your iPad, locally. You get full Alpine Linux as an iPadOS app, with all the power of a standard UNIX shell, and a complete package manager. And yes, this is a direct download on the App Store.

- **[GCP](https://cloud.google.com)**: Micro VMs are free, and provide more than enough power to run simulation software and web servers. This is super useful to access a full Ubuntu/Debian machine without being limited by the iPad's hardware. It's a testament to the modern cloud-native workflow, where the device you hold is just a window into the powerful machine doing the real work.

- **[Termius](https://termius.com)**: An SSH Client that stores credentials for every host I use (GCP, Linux 5060 laptop, and anything my work or university gives me). Super slick, and the UX is very similar to iSH. It's a clean, reliable, and powerful gateway to my remote servers.

- **[Jump Desktop](https://jumpdesktop.com/)**: RDP into my Mac mini at home to get a full desktop GUI. The Mac mini is running headless and connected via Ethernet, and that gives me HD streams with zero latency (including streaming audio from the Mac). This allows me to do tasks like Xcode/Android development, which are completely impossible on the iPad itself. I also often leave the gaming laptop as a server at home, and RDP into it in a similar manner.

Essentially, ***I believe we are once again in the era of mainframe computing.*** Not exactly mainframe, but enough in principle. Our devices are now more than sufficient as thin clients given most of our work (or at least my specific developer workflow) can and does happen on the cloud. At least most email and office tasks, with a feature set satisfying a majority of the populace, happen entirely on the cloud now: making most consumer-facing devices thin clients as well.

None of the work that I do is feasible on **only **a thin and light laptop. At the very minimum, I am using a bulky gaming laptop. More realistically, I am using a Cloud compute solution (and many more people increasingly are). The iPad, in this model, is the perfect thin client. It's a light, portable, and extremely well-made terminal for a more powerful machine.

When I did an assessment of how I use my own laptop on the go, I realized that it has been a fancy SSH terminal for about 80% of my workflow. Things I can easily replicate with my iPad, while reducing my backpack’s weight and getting to also enjoy curated iOS apps alongside. From Cargo, Valgrind, CUDA, LLDB, Vim, Xcode, IntelliJ, BBEdit, and Zsh…to Pixelmator, Sketchbook, GarageBand, Lightroom, and every app on the App Store…the iPad is able to do all of this as my sole mobile device. 

Heck, I’ve seen people run VS Code in Safari and remote into their GitHub Codespaces or SSH hosts using the iPad. It is a great thin client.

Sure, if you do not have any use for iPad apps, it makes way more sense to get a MacBook Air or similar thin and light laptop to act as a thin client. **However, for me, the iPad is a cheaper + lighter + nicer thin client that also gives me full access to the App Store.**

Yes, my primary OSes are still macOS and Linux on powerful desktops, but iPadOS has increasingly become so versatile with its new Mac-like multitasking paradigms, and RDP has gotten so great (with low latency and HD streams), that the iPad is more than enough for what I need. It is not just a consumer device, and it is not just a glorified big iPhone. It's a new class of professional tool, and one that fits my specific, highly demanding workflow perfectly.

And it’s incredibly light and portable.

Speaking, obviously, as a snobbish command line native.

[![Image](/images/IMG_6661.jpeg)](/images/IMG_6661.jpeg)

Documentation while on the Green Line