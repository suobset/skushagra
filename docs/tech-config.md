---
sidebar_position: 10
---

# Software Config

This is a repository of all software I use, hopefully with reasoning behind them. It is not yet complete, and will probably be ever-evolving.

I am a firm believer in free/libre and open source, but especially free/libre software. Keep in mind, free does not refer to "free of cost", but rather to the notion of providing users the freedom to truly own what they pay for. I follow the Free Software Foundation's definition of Free/Libre Software, and my thoughts+ these freedoms are linked [here](/disclaimer_fsf).

Sometimes, I do have to resort to some proprietary software. In that case, I either look for an equivalent open-source alternative, try to see if a Linux version of that proprietary software exists, or (as a last resort) just use Windows. I use an iPhone 14 + Apple Watch combo, mainly due to convinience factor as of now.

## Languages

I do low level systems stuff mainly. I am highly familiar with GNU CoreUtils, and the GDB debugger. I love Valgrind as well, the stack traces and memory visualizations are honestly a godsend. I mainly use C++, though am opening up to RUST as well.

As mentioned in [Scriting Shenanigans](/docs/independent/scripting-shenanigans), Python is my go to for any scripts or hobby programs. I have also programmed in R, MATLAB, Haskell, Java, Swift, dotnet, and Kotlin (professionally and hobby), among some others. I really don't like classifying myself as a "what language do you know person", I focus on problems and what the best tooling is for the job to be done. Learning a language, for the most part, is just picking up on the syntax and programming paradigms, but it does not change the basic knowledge required to code. 

I love Bash Scripting and Vim Scripting for my own tinkering purposes. For my honors thesis, I have also worked on a lot of x86 Assembly directly (including writing, debugging, and converting). I have become pretty comfortable with these low-level languages, though I do learn something new everyday. 

Apart from that, I mainly do Web Dev as a means for end-user application dev. I have experience with PHP, HTML/CSS, JavaScript, Node, React, SQL and MongoDB, Flask, Firebase, and continuously keep learning new technologies. I love the web due to its open nature, and the ability to adapt to any system regardless.

## Operating System

### Main

On the stable "I-want-stuff-to-work" end of things, I have been a devout [Pop!_OS](https://pop.system76.com) GNU/Linux user for the longest time now. It's basically an Ubuntu derivative, but comes with multiple versions of the ISO that makes installation of core utilities (on top of what Ubuntu provides) much easier. For example, it has a NVIDIA .iso with all drivers included (including CUDA and CUDNN), an arm compatible RasPi version, among many others. Package management is also up to date every time, the desktop environment is amazing (heavily modified GNOME but has it's own taste and uniqueness), and it honestly just works effortlessly (even more effortless than a Mac).

Dell G3 3500 w/ a 1660Ti: Main computer with Pop!_OS (used as a desktop). Does all heavy computation (GPU is a nice for CUDA and ML tasks). Runs Alpine as a guest in Docker for NAS, and in VMs for different tinkering purposes. Runs Trisquel as a guest in a VM for tinkering purposes. Can remote into this while on the go. 

<hr />

### On the go

I will most definitely get slack for this as a "Libre software" person,  but I use [macOS](https://apple.com/macos) and [iPadOS](https://apple.com/ipados) on the go as well. In my opinion, Macs are the only thin and light computer on the market that's as powerful as it is (thanks to Apple Silicon), with a battery that lasts over a day on heavy usage (thanks to Apple Silicon), and is the only UNIX platform (Darwin & BSD) that comes with market support, customer care, warranty, and the ability to run mainstream programs. The iPad only serves three purposes: external Mac display, glorified notebook, and glorified eBook reader (given the exorbitant prices of college textbooks for a hardcopy vs. ebook, the iPad paid off for itself by my second year at UMass, while helping me keep my notes organized and my backpack light).

MacBook Air M2 w/ iPad Mini: Main on-the-go computer. I actually snagged both of these for a pretty good deal :)

<hr />

### Inside a virtualized env

I tinker a lot with [Trisquel](https://trisquel.info), a fully-free (as in freedom) Operating System. I have broken it, repaired it, changed the source code in bad ways...almost everything imaginable. Trisquel does away with any and every remenant of proprietary code, including not working with proprietary drivers for hardware or sometimes flat out refusing to boot. These can be overcome by the user (the Trisquel apt repository does not have any proprietary stuff but you can build from source), but doing so is heavily frowned upon as it tries it's best to remain true to the ethos of libre software. I commend the people behind the OS who are able to make such a commitment, and I am glad that a truly libre OS actually exists and is capable to be daily driven, as long as appropriate hardware research is done prior.  

[Alpine](https://alpine.org) has my heart as a no-nonsense small OS. It runs beautifully on any hardware I have tried it on, but the primary use case is as a guest OS for virtualizing and containerizing. I currently use it as a guest OS for any VMs I need to spin up for whatever purposes, my docker containers, my Dell computer acting as a NAS server (it runs in a container with Pop!_OS as main), and a 32 bit version on a netbook I salvaged for free to run legacy stuff.

If Alpine does not fit my needs for the above purposes, i use [Debian](https://debian.org) as a fallback. It's more reliable and standardized than Alpine, but comes at the cost of being larger than Alpine (still incredibly small by OS standards, but Alpine takes that to 11).

Windows is a fallback, and needs a lot of resources to run at times. I do have some required software that's Windows only though (Visual Studio, .NET, Postman), so I run it inside a VM. Windows currently does not run as a host on any of my devices, it only runs as a VM guest when necessitated.

Refer to ```Virtualization, Containerization, Sim/Emulation``` section for Hypervisors.

<hr />

About every piece of software I use needs a very absolutely minimum of 8GB RAM, and an ideal of at least 16GB RAM.

### Desktop Environments

A smaller subset of the main OS, different Linux flavors can use different desktop environments. To cut to the chase, I use [COSMIC](https://blog.system76.com/post/cosmic-the-road-to-alpha), the GNOME implementation of Pop!_OS as my main. I use [XFCE](https://www.xfce.org/) as my Linux DE for all the other flavors mentioned above (Alpine, Debian, Trisquel).

I hardly make changes to macOS or Windows. 

### Other Systems

* Old 32-bit Acer Netbook that I salvaged from eWaste: Runs 32-bit Alpine with XFCE for running other 32 bit programs. Is actually prone to [Y2K38](https://en.wikipedia.org/wiki/Y2K38).

## Code Editors and IDEs

Sorted by frequency: high to low 

* [BBEdit](https://www.barebones.com/products/bbedit/): A macOS native Code Editor being developed for over 30 years. Super stable, packed with features, has a minor learning curve for the more advanced features that's worth it imo.
* [Neovim](https://neovim.io/): a fork of vim with extended plugin support, and a more suistainable development model. 
* [Micro](https://micro-editor.github.io/): Terminal editor with regular keybindings and mouse support. Used in team settings.
* [Jupyter](https://jupyter.org/): Data-based Python code, where an explanation & presentation of methods is absolutely crucial. Uses ```ipynb``` to split between Markdown cells or Python cells.
* [KATE](https://kate-editor.org/): The GUI main for Alpine and Trisquel, provides all the core features of VS Code without the Microsoft stuff. 

### Non active

I do not use these currently, mainly because I don't have a reason to. However, I might come back to them if a project mandates. This is not to say that these are bad editors, I just don't need them as of now.

* [Spyder](https://www.spyder-ide.org/): Scientific computing in Python, having a variable explorer and data-exploration based features help a lot.
* [RStudio](https://rstudio.com): I have a total of 2 projects on R. RStudio is really powerful for what it does, and has a genuinely very shallow learning curve (at least relatively). Good editor, I am just not the target demographic.
* [MATLAB](https://www.mathworks.com/products/matlab.html): The only Engineering-oriented language I have used, check out my iCons 3 project: [The Cost of Control](https://skushagra.com/docs/research/iCons#icons-3-the-cost-of-control).
* [JetBrains](https://www.jetbrains.com/): Rare, but super complex projects have really benefitted from the strong debugger, language-oriented IDEs, and refactoring capabilities. Is a memory hog though, so would recommend a high-spec computer. This includes Android Studio.
* [Helix Editor](https://helix-editor.com/): A post-modern modal text editor. Really stupidly good at what it does, the only times I do not use it is when I need a Neovim plugin.
* [VSCode](https://code.visualstudio.com/): Good extension market, has a vim plugin. I don't like the web app nature, Microsoft telemetry and AI stuff, and padded mobile-UI buttons. I come back to this only for codespaces and tunnels.

## Photo/Video/Graphic Editing

The following is what I use to facilitate my Photography. 

* [GNU Image Manipulation Program](https://www.gimp.org/), or GIMP, is a libre photo editr which almost rivals Adobe Creative Suite. May have a slightly higher curve of learning, but it is extremely powerful and versatile for what it offers. Beautifully amazing.
* [Darktable](https://www.darktable.org/): RAW image processor and developer, that I pair with GIMP to offload and edit RAW image fiels (RAW is a file format that captures more information than a compressed JPEG; standard in photography).
* [Adobe Lightroom](https://www.adobe.com/products/photoshop-lightroom.html): For small edits on the go, I rely on the free version of Adobe Lightroom on my phone. I like it, but prefer to not use it whenever possible (only use it in circumstances where absolutely necesssary).
* [Shotcut Video Editor](https://shotcut.org/): A Libre Video Editor which, again, rivals that of Adobe's offerings. Has a slight learning curve, but is immensely powerful, and handles a lot of Video Editing paradigms (transitions, fx, voice sampling, etc.) amazingly. I have had no complaints for my amateur Video Editing needs.
* Canva: An online (proprietary) graphic designer. Used only when absolutely necessary. 
* [Affinity](https://affinity.serif.com/en-us/photo/): Proprietary photo editor but does away with all Adobe BS. Still learning, haven;t made the call to switch from GIMP (I am very well versed and comfortable in GIMP at this point).

## Office Work & typing documents

Writing text-based files? Here's what I use:

* [Libreoffice](https://www.libreoffice.org/): Licensed under MPL v2.0, Libreoffice is a Free and Open Source alternative to MS Office, compatible with the OpenDocument formats and the proprietary MS Office formats. LibreOffice is community driven with a governance model that ensures the software is accessible to all (along with source code, and rights to modify the same), transcending all language barriers and boundaries.
* [Google Workspace](https://drive.google.com): Another Office suite, albeit used much less due to the proprietary nature. However, being in university, it is an absolutely crucial tool to enable collaboration and teamwork (multiple people can edit the same documents at the same time), while maintaining aceptable levels of privacy and security over documents.
* [LaTeX](https://www.latex-project.org/): LaTeX i a typesetting language that creates some of the cleanest, crispiest documents ever to exist. While it is the standard for research papers and technical documentation, I have also been using it fo homework. Types in any language, including Math and Code. Can be whatever you want it to be.
    * Want a quick way to try LaTeX? Try [Overleaf:](https://overleaf.com) a web-based LaTeX editor. 
* [Markdown](https://www.markdownguide.org/): A quick and easy markup language that I use for quick notes, documentation, and even this entire website (including this webpage you're looking at). 
* [Pandoc](https://pandoc.org/): A universal document converter that converts any format to any other format through a set of unique tools. Convert Markdown to PDF, Docx to OpenDoc, HTML to Markdown, etc.

## Geographic Information Systems

So far, I have done about 3 research projects regarding plotting and mapping data, as well as countless personal projects. I do not see this stopping anytime soon, so here's the toolset I am comfortable with:

* [QGIS](https://qgis.org/en/site/): Libre Source GIS Mapping and Plotting Software, most recently used in [iCons + Museum of Science Project](https://skushagra.com/docs/research/icons#icons-2-museum-of-science) and in a personal project mapping weather data over time.
* [Leaflet](https://leafletjs.com/): A JavaScript framework to plot maps on web-based solutions. Check out [ASSERT](https://suobset.github.io/assert) and [MoS](https://suobset.github.io/iCons/iCons2-MoS).

In a way, I use QGIS for background researcgh and enjoy the freedom of manipulation and experimentation as a whole, then export the final data and use Leaflet to publish it on the web for everyone to see. 

Leaflet used in conjunction with Python or R.

## Bibliography Management Systems

This pretty much depends on the nature of the project I am doing. There are 2 main options:

* [Wikindx](https://wikindx.sourceforge.io/web/trunk/index.html): Libre Source Bibliography that is self-hosted and uses a MySQL database to store information. I use it locally hosted for my own research (since everything is local), and use a locally hosted version for the [LinKaGe Lab](http://linkage.cs.umass.edu) with multi-user support and web support.
* [Zotero](https://zotero.org): Comes into play when I need to have shared bibliographies over the internet, mainly as a ease-of-use. Zotero was used in almost every iCons project listed. 

Both of these options share a lot of similarities with each other, except that Zotero is paid for large storage solutions but shareable, while Wikindx is self-hosted and the only constraint is your own computer. 

Legacy mention: [Aigaion](https://github.com/aigaion/aigaion) which was replaced by Wikindx. PHP underwent such drastic changes that Aigaion was rendered useless on anything above PHP version 5. 

## Debuggers & Analyzers

Apart from the usual (extensions for IDEs for different languages, or print statements :P), I do a lot of low-level code. This section also includes a bunch of more things that help in development and analysis, not just debugging.

Only external programs are included here, not the actual debuggers in themselves. For example, the ```rust_debugger``` is just included in RUST and has CLI attributes to invoke (or it can latch on to GDB, which is what I do), so that is not mentioned. Moreover, IDE debuggers are not included (Visual Studio already has an excellent .NET and C debugger, but is mentioned above). 

These are only **external** debuggers and analyzers that are not included within the compilers/interpreters themselves, and are not included within an IDE mentioned above. Hence why the list is short.

* [GNU GDB](https://www.sourceware.org/gdb/): The GNU Project Debugge, while meant for C/C++ initially, can really debug any language that builds debug flags for it. I use it for C++, RUST, x86 Asm, and some Python Bytecode too.
* [Valgrind](https://valgrind.org/): Advanced debugger for C/C++ that maps out memory management, program flow, and overall functioning of computational resoures so that Segmentation Fault can be debugged quicker. 
    * Shouout to [Uma](https://www.linkedin.com/in/uma-p-24b78a156/) for introducing me to Valgrind back in CS 230 (Intro. to Systems)
* [ltrace](https://ltrace.org): Command Line Utility that intercepts System Calls and Library Calls from any running process and creates a dump file. 
* [Wireshark](https://www.wireshark.org/): Packet tracer and network protocol analyzer, used for analyzing networks. GPLv3'd at that. I use this way more often than I'd think.
* [Ghidra](https://ghidra-sre.org): A Software Reverse Engineering tool; especially useful if access to source code is not present. Ghidra was mainly used in the first iteration of my Undergraduate Honors Thesis at UMass Amherst; while I don't use it much currently, I still want to give it a mention for how excellent the tooling is.
* [Postman](https://www.postman.com/): A JavaScript API analyzer and builder, extremely helpful to create APIs that interact within a website or with external 3rd-party tooling. Negatives: proprietary and has a weird pricing ladder, which makes me not want to use it and just rely on the Console.
* [pgAdmin](https://www.pgadmin.org/): Open Source GUI workbench for PostgreSQL. I use MySQL Workbench for MySQL. I just refuse to rely solely on the Console for SQL, given how things can mess up quickly.

## Server-side computation & Terminals

* [Waveterm](https://www.waveterm.dev/): Open Source Terminal that has overtaken whatever barebones terminal that ships with any OS (zsh or Bash), has a lot more cool features built-in that I don't use as much, but some QOL stuff that's pretty good to have. Feels bloated sometimes. 
* [Termius](https://termius.com): SSH & SFTP Client with insanely good features built in (GUIs, drag and drop support, SSH key handling, concurrent sessions)
* [GNU Bash](https://www.gnu.org/software/bash/): The most powerful CLI I have used, ever. Also really the one I have been used to, despite using Powershell considerably as well. ZSH on Mac, though.
* [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US): Honestly the hands-down best solution on Windows, now the default in Windows 11. Tabbed terminals, each of which can wither Powershell on host or BASH/ZSH on a guest WSL instance.

## Virtualization, Containerization, Sim/Emulation

* [GNS3](https://www.gns3.com/): Network systems virtualizing software. Libre software as well, works best on Linux with a minimum of 16GB RAM and on an x86 Architecture. 
* [Virtualbox](https://www.virtualbox.org/): Virtualization Software. New project that will quickly get a file system spread? Just put it in a VM :)
* [Docker](https://www.docker.com/): Containerization Software to ensure similar debugging and execution experiences everywhere. Super useful when dealing with low-level code to ensure OS consistencies, or high-level code to plug-and-play different components. 
* [QEMU](https://qemu.org): Emulation for different hardware, including ARM, RISC-V, and x86. Used in the tinkering of MIT PDOS xv6, and in current MorbiOS development. 
* [UTM](https://mac.getutm.app/): Main macOS hypervisor. Parallels has GPU passthrough but UTM is free and Open Source (plus I do not need GPU passthrough).

## Miscellaneous

* [KDE Connect](https://kdeconnect.kde.org/): Cross-platform continuity daemon for Linux, iOS, Android, macOS, and Windows. Basically make all your devices work with one another & not have file mess-ups or incompatibility issues.
* [Figma](https://figma.com): Wireframing tool to chart out the behaviour of an application, or the base UI/UX before code. Helps you pln out the whole thing before starting the code out.

## Mobile

A whole bunch of iOS Apps that I really love and help me be productive (on top of mobile versions of eveyrthing mentioned above):

* [Working Copy](https://workingcopy.app/): An iOS Git Client that connects with GitHub, BitBucket, or your own Local/Remote Servers. Works seamlessly with the iOS Files and Cross-App as well.
* [iSH](https://ish.app/): Alpine Linux Virtualized in a Sandboxed environment on iOS. Does everything you could possibly do in a shell, including creating and deploying local servers or using vim. 
* [Shortcuts](https://support.apple.com/guide/shortcuts/welcome/ios): The closest thing to "scripting" on iOS, Shortcuts is a drag-and-drop language to provide scripting, automation, and code tasks natively on iOS. Harnesses the full device capability: location, sensors, app actions, your own code, etc. I plan to get a page on the Finechive for sharing my own Device Automations.
* [Chromatica](https://chromatica.app/): This is my primary professional camera on iOS. 
