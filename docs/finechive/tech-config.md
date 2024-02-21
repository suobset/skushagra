---
sidebar_position: 7
---

# Software Config

This is a repository of all software I use, hopefully with reasoning behind them. It is not yet complete, and will probably be ever-evolving.

I am a firm believer in free/libre and open source, but especially free/libre software. Keep in mind, free does not refer to "free of cost", but rather to the notion of providing users the freedom to truly own what they pay for. I follow the Free Software Foundation's definition of Free/Libre Software, and my thoughts+ these freedoms are linked [here](/disclaimer_fsf).

Sometimes, I do have to resort to some proprietary software. In that case, I either look for an equivalent open-source alternative, try to see if a Linux version of that proprietary software exists, or (as a last resort) just use Windows. I use an iPhone 12 mini + Apple Watch combo, mainly due to convinience factor as of now.

## Operating System

On the stable "I-want-stuff-to-work" end of things, I have been a devout [Ubuntu](https://ubuntu.com) GNU/Linux user for the longest time now. I dabbled into Pop!_OS for a bit, but Ubuntu feels more stable and refined. Moreover, I spend most of my time in the terminal.

I tinker a lot with [Trisquel](https://trisquel.info), a fully-free (as in freedom) Operating System. I have broken it, repaired it, changed the source code in bad ways...almost everything imaginable. 

[Alpine](https://alpine.org) has my heart as a no-nonsense small OS. It runs beautifully on any hardware I have tried it on, but the primary use case is as a guest OS for virtualizing and containerizing.

Windows is a fallback, and needs a lot of resources to run at times. Currently in use as a host for different WSL runtimes, and for running Windows-specific software on my desktop.

About every piece of software I use needs a very absolutely minimum of 8GB RAM, and an ideal of at least 16GB RAM.

## Code Editors and IDEs

Sorted by frequency: high to low 

* [Neovim](https://neovim.io/): a fork of vim with extended plugin support, and a more suistainable development model. 
* [Jupyter](https://jupyter.org/): Data-based Python code, where an explanation & presentation of methods is absolutely crucial. Uses ```ipynb``` to split between Markdown cells or Python cells.
* [Helix Editor](https://helix-editor.com/): A post-modern modal text editor. Really stupidly good at what it does, the only times I do not use it is when I need a Neovim plugin.
* [VSCode](https://code.visualstudio.com/): Good extension market, has a vim plugin; I was on VSCodium up until very recently, need VSCode for Tunnels (more secure, and less fuzzy SSH alternative).
* [JetBrains](https://www.jetbrains.com/): Rare, but super complex projects have really benefitted from the strong debugger, language-oriented IDEs, and refactoring capabilities. Is a memory hog though, so would recommend a high-spec computer.
* [Spyder](https://www.spyder-ide.org/): Scientific computing in Python, having a variable explorer and data-exploration based features help a lot.
* [RStudio](https://rstudio.com): I have a total of 2 projects on R. RStudio is really powerful for what it does, and has a genuinely very shallow learning curve (at least relatively). Good editor, I am just not the target demographic.

## Photo/Video/Graphic Editing

The following is what I use to facilitate my Photography. 

* [GNU Image Manipulation Program](https://www.gimp.org/), or GIMP, is a libre photo editr which almost rivals Adobe Creative Suite. May have a slightly higher curve of learning, but it is extremely powerful and versatile for what it offers. Beautifully amazing.
* [Adobe Lightroom](https://www.adobe.com/products/photoshop-lightroom.html): For small edits on the go, I rely on the free version of Adobe Lightroom on my phone. I like it, but prefer to not use it whenever possible (only use it in circumstances where absolutely necesssary).
* [Shotcut Video Editor](https://shotcut.org/): A Libre Video Editor which, again, rivals that of Adobe's offerings. Has a slight learning curve, but is immensely powerful, and handles a lot of Video Editing paradigms (transitions, fx, voice sampling, etc.) amazingly. I have had no complaints for my amateur Video Editing needs.
* Canva: An online (proprietary) graphic designer. Used only when absolutely necessary. 

## Office Work & typing documents

Writing text-based files? Here's what I use:

* [Libreoffice](https://www.libreoffice.org/): Licensed under MPL v2.0, Libreoffice is a Free and Open Source alternative to MS Office, compatible with the OpenDocument formats and the proprietary MS Office formats. LibreOffice is community driven with a governance model that ensures the software is accessible to all (along with source code, and rights to modify the same), transcending all language barriers and boundaries.
* [Google Workspace](https://drive.google.com): Another Office suite, albeit used much less due to the proprietary nature. However, being in university, it is an absolutely crucial tool to enable collaboration and teamwork (multiple people can edit the same documents at the same time), while maintaining aceptable levels of privacy and security over documents.
* [LaTeX](https://www.latex-project.org/): LaTeX i a typesetting language that creates some of the cleanest, crispiest documents ever to exist. While it is the standard for research papers and technical documentation, I have also been using it fo homework. Types in any language, including Math and Code. Can be whatever you want it to be.
    * Want a quick way to try LaTeX? Try [Overleaf:](https://overleaf.com) a web-based LaTeX editor. 
* [Markdown](https://www.markdownguide.org/): A quick and easy markup language that I use for quick notes, documentation, and even this entire website (including this webpage you're looking at). 

## Geographic Information Systems

So far, I have done about 3 research projects regarding plotting and mapping data, as well as countless personal projects. I do not see this stopping anytime soon, so here's the toolset I am comfortable with:

* [QGIS](https://qgis.org/en/site/): Libre Source GIS Mapping and Plotting Software, most recently used in [iCons + Museum of Science Project](https://skushagra.com/docs/research/icons#icons-2-museum-of-science) and in a personal project mapping weather data over time.
* [Leaflet](https://leafletjs.com/): A JavaScript framework to plot maps on web-based solutions. Check out [ASSERT](https://suobset.github.io/assert) and [MoS](https://suobset.github.io/iCons/iCons2-MoS).

In a way, I use QGIS for background researcgh and enjoy the freedom of manipulation and experimentation as a whole, then export the final data and use Leaflet to publish it on the web for everyone to see. 

Leaflet used in conjunction with Python or R.

## Debuggers

Apart from the usual (pydebug for Python, or extensions for IDEs for different languages, or print statements :P), I do a lot of low-level code. Here is what helps me:

* [GNU GDB](https://www.sourceware.org/gdb/): The GNU Project Debugge, while meant for C/C++ initially, can really debug any language that builds debug flags for it. I use it for C++, RUST, x86 Asm, and some Python Bytecode too.
* [Valgrind](https://valgrind.org/): Advanced debugger for C/C++ that maps out memory management, program flow, and overall functioning of computational resoures so that Segmentation Fault can be debugged quicker. 
    * Shouout to [Uma](https://www.linkedin.com/in/uma-p-24b78a156/) for introducing me to Valgrind back in CS 230 (Intro. to Systems)

## Server-side computation & Terminals

* [Termius](https://termius.com): SSH & SFTP Client with insanely good features built in (GUIs, drag and drop support, SSH key handling, concurrent sessions)
* [GNU Bash](https://www.gnu.org/software/bash/): The most powerful CLI I have used, ever. Also really the one I have been used to, despite using Powershell considerably as well.
* [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US): Honestly the hands-down best solution on Windows, now the default in Windows 11. Tabbed terminals, each of which can wither Powershell on host or BASH/ZSH on a guest WSL instance.

## Misc. Important Software 

Does not fit in a pre-defined category but equally important.

* [Wireshark](https://www.wireshark.org/): Packet tracer and network protocol analyzer, used for analyzing networks. GPLv3'd at that :D
* [GNS3](https://www.gns3.com/): Network systems virtualizing software. Libre software as well. 
* [Virtualbox](https://www.virtualbox.org/): Virtualization Software. New project that will quickly get a file system spread? Just put it in a VM :)
* [Docker](https://www.docker.com/): Containerization Software to ensure similar debugging and execution experiences everywhere. Super useful when dealing with low-level code to ensure OS consistencies, or high-level code to plug-and-play different components. 

## Languages

I do low level systems stuff mainly. I am highly familiar with GNU CoreUtils, and the GDB debugger. I love Valgrind as well, the stack traces and memory visualizations are honestly a godsend. I mainly use C++, though am opening up to RUST as well.

As mentioned in [Scriting Shenanigans](./scripting-shenanigans), Python is my go to for any scripts or hobby programs.

I used to code for Android, but have stopped doing so lately. 

Apart from that, I mainly do Web Dev as a means for end-user application dev. I have experience with PHP, HTML/CSS, JavaScript, Node, React, SQL and MongoDB, Flask, and continuously keep learning new technologies. I love the web due to its open nature, and the ability to adapt to any system regardless.

## Computer

I use Ubuntu on a Microsoft Surface Laptop Go 2 (yes, that's a mouthful). It's essentially a regular Surface Laptop, albeit with some underclocked specs in a smaller enclosure. It fares well for everything that I throw at it, and is super light and portable. Has a great keyboard, and a touchscreen. Only gripe would be lack of a backlit keyboard, and equivalently priced laptops having better specs.

I do have a Gaming Laptop connected as a Desktop at all times for high-processing tasks. That is a 16GB DDR4, 11th Gen Core i7, and a 1660Ti GPU Dell G3 3500. This specific computer, however, [got Dell a lawsuit for a weak hinge design](https://www.reddit.com/r/Dell/comments/j4buk9/class_action_lawsuit_against_dell_dell_g3_hinge/), which I can attest for as someone who also has had hinge problems, despite proper care and usage. It overheats quite easily as well, and battery life is absolute garbage; but for someone who's always on the move...it is a better option than an actual desktop tower.

I used to daily a 2017 MacBook Pro (the bad keyboard, thermal throttling generation). It served me decently, but died at the worst possible time (during data processing in an irl crunch for my [research at the time](https://suobset.github.io/iCons3)). I no longer have it.

Outside of it, I use an iPad mini as my eBook reader and note taking device all the time. This device has saved me quite a lot in textbook money (paid for itself in a semester), and I also use it as a second display through RDP on GNOME (on Ubuntu).

![iPad + Surface](./assets/tech-config-setup.jpg)