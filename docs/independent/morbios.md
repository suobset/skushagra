---
sidebar_position: 2
---

# MorbiOS

A completely built-from-scratch Operating System, in collaboration with [@anvitha305](https://github.com/anvitha305). More details here soon.

GitHub Repository: https://github.com/anvitha305/morbios

Disclaimer: Please Read [About Code Projects in the Finechive](./code-projects) for more info.

This is a multi-year project that was first conceived April/May 2024. We do not expect this to complete soon, this is more of a learning experience for both of us to understand how computers work.

We are both CompSci majors (Anvitha is CompEng as well) who have heavily worked in Systems related stuff. We were both in the UMass Amherst Undergraduate Class of 2024. Anvitha's ~~honors~~ thesis was creating a [legv8 assembly simulator](https://github.com/anvitha305/legv8sim) to lower the barrier of assembly programming for the masses. [My honors thesis](https://skushagra.com/docs/undergraduate/tra86) was finding out performance differences between RUST and C++ on the x86 Architecture by coding the same programs on both; extracting the Assembly; running the Assembly with a stack tracer I built to trace the instructions executed, memory usage, and runtime statistics; and compare the details. 

We both have extensive low level systems experience, experience with Assembly, experience with x86, C/C++ experience, hardware, UNIX toolchains, compilers (including how to build a basic one from scratch and what they truly do), emulation/virtualization (down to the conceptual levels), and ongoing RUST experience. Not to sound overly confident, but going through the [required knowledge](https://wiki.osdev.org/Required_Knowledge) page in OSDev Wiki, we seem to have experience in mostly everything. Yes, we are wary of the [NUMEROUS warnings](https://wiki.osdev.org/Beginner_Mistakes) in that wiki, but truth be told: we have a lot of low level systems and Assembly experience. What we do not know is how everything comes together to create a cohesive OS, and how it works on the bare architecture.

A big part of being confident in the journey ahead also involves in being aware about what we do not know. Here goes a non-exhaustive ever-expanding list of the same: 

* Bootloaders and how the first bit of code is initialized. 
* x86 Architecture outside just the Assembly instructions. We can write asm and use a compiler to run it, but how do we do it in Real Mode
* Any OS stuff prior to UNIX having been developed. If a new OS requires an existing OS, how did the first OS came to be (Anvitha might actually have domain specific knowledge here)
* Executable file types from scratch. Yes, Compiler -> Assembler -> Linker -> Executable. Now what?? How do we exactly "run" this in a OS context.
* Parallel processing and multithreading without an API. Actually managing multiple threads and cores on the Asm level.
* Context switching kernel level vs. user level stuff: esp. if we go down a monolithic/hybrid kernel route.
* Protected process execution. One seg fault should not crash the whole thing, yet I am sure at this stage it might.
* Where tf do we start reg. a kernel??
* BIOS/UEFI level programming
* More to come here, again this is a very small subset in literally 30 seconds of thought.

After having so much experience in low level systems in contained environments, we want to push the boundaries and learn about OS Dev. That is all that this project is. We know we are not overthrowing established OSes, neither are we generating interest in the matter. 

Honestly, we're just vibing, learning, and pushing what we already know in low level systems to the max.

## Project Kickoff

The following are some (badly written) notes regarding Operating System development, what has already been done, and how we got to this point today. In essence, I want to cover the topics of kernel development, how that latches on to userspace applications, and different development methods that I have targeted for this project. 

As per the bootloader, we are personally making it GNU GRUB compatible. However, we want to make this whole thing from scratch, and that involves a bootloader. This is currently exclusively handled by my co-collaborator Anvitha, who I will be discussing the specifics of the bootloader with and reporting the same here as well. Hopefully they get a website in the meantime :') 

If you were to go out and ask, "hey, I wanna build an Operating System but don't know what kernel to use...can you help me??", chances are you will likely hear to base it on some variant of UNIX. It's pretty ubiquitous in the OS world, as while you may disagree with some UNIX philosophies, it is used widely enough (and is portable enough) that it makes sense as a starting point.

<hr />

### History Lesson

Historically (and this is my recollection so may be inaccurate), UNIX was a proprietary OS created by our friends at Bell Labs (AT&T), used widely in mainframe computing servers and such. Most user computers were terminals that would connect to the "mainframe", and have a terminal output. This command line interface was UNIX, an OS so modular it treats every single thing as a file, stored on a root location. Including directories and file paths, binaries, logs, configs, and user-created files, with everything else in between...those are files as well.

Thanks to the user friendliness of UNIX, along with the prevalence of Mainframe computation, UNIX became mega popular. This intrigued Richard Stallman, who loved UNIX's modularity and open nature but hated the fact that it was proprietary and could not be freely distributed.

#### GNU and the Birth of Open Source

So, Richard Stallman got to work on the GNU project (GNU's Not Unix), aiming to create a free, open-source UNIX-like OS. This was the spark that ignited the free software movement, which later evolved into the broader open-source movement. The GNU project created many essential tools and utilities needed for a functional operating system, but they were missing one crucial component: the kernel.

#### Enter Linux

Enter Linus Torvalds. In 1991, Linus, a Finnish computer science student, started working on his own kernel as a hobby project. This kernel, combined with the GNU utilities, formed a fully functional operating system. This powerful duo, GNU and Linux, became what we now call the GNU/Linux operating system, or more commonly, just Linux. It brought the philosophy of open source to the mainstream, and today, Linux powers everything from supercomputers to smartphones.

#### A Parallel Timeline: DOS, Windows, NeXT, and BeOS

While UNIX was making waves in the computing world, other significant developments were happening elsewhere. In the early 1980s, Microsoft and IBM collaborated to create an operating system for IBM's personal computers. This OS, known as DOS (Disk Operating System), became the foundation for Microsoft's future operating systems. DOS was a simple, command-line-based OS that was user-friendly and affordable, making personal computing accessible to the masses.

##### Microsoft and Windows

Microsoft quickly saw the potential of graphical user interfaces (GUIs) and began developing Windows as a shell on top of DOS. The first version of Windows, released in 1985, was not very impressive, but it laid the groundwork for future developments. Over the years, Windows evolved, with significant releases like Windows 95, which integrated DOS and Windows into a single product, and Windows NT, which introduced a new, more robust kernel architecture.

The NT kernel, which powers modern versions of Windows, was designed for high reliability and security. Despite the rise of UNIX-like systems, Windows has maintained a dominant presence in the desktop and enterprise markets.

##### NeXT and Apple

Meanwhile, Steve Jobs, after leaving Apple, founded NeXT. The NeXTSTEP operating system, developed by his company, was based on the UNIX philosophy and introduced several advanced features, including a sophisticated GUI and object-oriented programming environment. When Jobs returned to Apple, NeXTSTEP became the foundation for macOS.

Today, macOS runs on a UNIX-like core called Darwin, which is based on the XNU kernel, combining elements from Mach (a microkernel) and components from BSD (a UNIX derivative). This makes macOS a powerful and user-friendly operating system that is also highly compatible with UNIX standards.

##### Other stuff

Other efforts include more experimental and niche systems like Haiku, which continues the legacy of BeOS, and MINIX, a minimalistic microkernel-based system designed for educational purposes. BSD (Berkeley Software Distribution) is yet another UNIX derivative that gave way to Darwin. Despite their differences, most of these projects aim to achieve the robustness, flexibility, and modularity that UNIX is known for, highlighting its lasting influence in the OS world.

<hr />

### UNIX Today: The Ubiquitous Choice

Fast forward to today, and UNIX and its derivatives are everywhere. Apple's *OS, with its Darwin core, is a direct descendant of UNIX. Android, the world's most popular mobile operating system, is based on the Linux kernel. Even many network devices, servers, and supercomputers run on UNIX-like systems due to their stability, security, and flexibility. 

In contrast, Microsoft Windows remains the only major operating system using the NT kernel. However, the influence of UNIX can still be felt, as Windows has introduced features like the Windows Subsystem for Linux (WSL), allowing users to run a Linux environment directly within Windows.

So, if we were to create an OS and needed a kernel, people would say to just use the open source Linux kernel or one of the many UNIX derivatives. We only slightly refuse to, here's why.

## Kernel Development

Now, speaking of kernels, the kernel is the heart of the operating system. It manages hardware resources and allows software to run. There are several types of kernels: monolithic kernels, microkernels, and hybrid kernels, to name a few. 

Monolithic kernels, like the Linux kernel, include all the essential services in one large block of code. This can make them faster but also harder to debug and maintain. Microkernels, on the other hand, strip the kernel down to the bare minimum, running most services in user space. This makes them more modular and easier to maintain but can lead to performance overhead due to the increased number of context switches. Hybrid kernels try to balance these two approaches, aiming to get the best of both worlds.

Given the dominance of UNIX-like systems, one might wonder why I'm choosing a different path for my own OS development. My choice is driven by a desire to build something unique, avoiding reliance on existing *completed* UNIX systems to ensure a truly original creation. That's where ReactOS, and GNU Hurd come in.

Instead of using the widely adopted and already completed Linux kernel, we are focusing on GNU Hurd, another UNIX-like kernel that remains incomplete but holds great potential. By working on Hurd, we can contribute to its development while also creating a unique kernel for our OS. This approach ensures that our user space applications are built on a foundation that is not influenced by existing UNIX systems.

ReactOS is an open-source operating system designed to be binary-compatible with Windows applications and drivers. It provides a familiar environment for developing and running software without the direct influence of UNIX or Linux, or any methods to run it as well (like WSL or Cygwin). This makes it an ideal platform for our project, as we aim to develop my kernel without inadvertently relying on UNIX components.

My co-collaborator Anvitha is possibly relying on Windows as is, but also with GNU Hurd as our main kernel (which is incomplete and will require work). We just do not want to work on an OS that already has a completed UNIX under the hood, since this is also an exercise in learning how to construct a kernel. 

The following are some kernel notes.

### Userspace and System Calls

The kernel operates in a privileged mode (kernel space), while applications run in user space. To interact with the kernel, applications use system calls. These are predefined entry points that allow user-space applications to request services from the kernel, like reading from a file or sending data over a network.

Understanding and optimizing the interaction between user space and kernel space is crucial for OS development. Efficient system calls can significantly enhance the performance and responsiveness of the operating system. Here are a few aspects to consider:

1. **System Call Interface (SCI)**: The SCI is the gateway between user applications and the kernel. Designing a clean and efficient SCI is essential for performance. It involves defining the system calls, their parameters, and the conventions for passing data between user space and kernel space.

2. **Context Switching**: Switching between user space and kernel space (and vice versa) involves saving and restoring the state of the CPU. Minimizing the overhead of context switches is critical for maintaining system performance.

3. **Memory Management**: The kernel is responsible for managing memory allocation for both kernel and user space. Efficient memory management algorithms and policies are necessary to ensure optimal use of available resources and to prevent issues like fragmentation and memory leaks.

4. **Security and Isolation**: The kernel must ensure that user-space applications cannot interfere with each other or with the kernel itself. Implementing proper isolation mechanisms, such as process separation and access controls, is vital for system stability and security.

5. **Interrupt Handling**: Efficiently handling hardware interrupts and exceptions is a key aspect of kernel design. The kernel must provide mechanisms for registering and handling interrupt service routines (ISRs) and ensuring that critical tasks are not unduly delayed.

### Development Methods

For this project, we've explored various development methods:

1. **Bottom-Up Approach**: Starting with the most fundamental aspects (like the bootloader and kernel) and gradually building up the system. This method ensures a solid foundation but can be slow and cumbersome.

2. **Top-Down Approach**: Beginning with high-level components and services and then implementing the underlying mechanisms. This can provide a quicker path to a working prototype but risks foundational issues that can be hard to fix later.

3. **Modular Development**: Focusing on developing independent modules that can be integrated later. This offers flexibility and parallel development but requires careful planning and robust interfaces between modules.

### Bootloader

As mentioned earlier, our bootloader is being developed with GNU GRUB compatibility in mind. The bootloader's job is to load the kernel into memory and pass control to it. Anvitha is spearheading this effort, ensuring that our custom bootloader can initialize the system correctly and hand over control to our kernel seamlessly.

The bootloader is a critical component because it bridges the firmware and the kernel. It must perform several tasks:

1. **Hardware Initialization**: Setting up essential hardware components and peripherals, such as initializing memory controllers and configuring CPU settings.

2. **Loading the Kernel**: Locating the kernel binary on the storage device, loading it into memory, and preparing the execution environment.

3. **Passing Parameters**: Providing the kernel with necessary parameters and information about the system's state, such as memory maps and boot arguments.

4. **Transitioning Control**: Safely transferring control from the bootloader to the kernel, ensuring that the system remains in a consistent state.

### Kernel to User Space

Transitioning from kernel space to user space is a critical step in the OS boot process. After the kernel is loaded and initialized, it must start the first user-space process, often called the init process. This process is responsible for setting up the user environment and launching other essential services.

1. **Process Management**: The kernel handles the creation, scheduling, and termination of processes. It must maintain process control blocks (PCBs) for each process, which store information such as the process state, program counter, CPU registers, and memory allocation.

2. **Inter-Process Communication (IPC)**: Mechanisms like pipes, message queues, shared memory, and signals allow processes to communicate and synchronize their actions. Efficient IPC is crucial for the performance and functionality of the operating system.

3. **User Space Libraries**: Libraries like the GNU C Library (glibc) provide standard APIs for system calls, abstracting the complexity of direct kernel interactions. These libraries are essential for developing user-space applications and ensuring compatibility across different systems.

### Boot Processes

The boot process of an operating system involves several stages, from power-on to the running state of the OS:

1. **Firmware Initialization**: The BIOS or UEFI firmware initializes hardware components and performs a Power-On Self Test (POST). It then locates the bootloader on the storage device.

2. **Bootloader Execution**: The bootloader loads the kernel into memory, sets up the initial execution environment, and passes control to the kernel.

3. **Kernel Initialization**: The kernel initializes its subsystems, such as memory management, process scheduling, and device drivers. It then mounts the root filesystem and starts the init process.

4. **User Space Initialization**: The init process sets up the user environment, starts essential services (like networking and logging), and launches the user interface or command-line shell.

### General User Space Development

Developing user-space applications involves several key aspects:

1. **Application Programming Interfaces (APIs)**: Developers use APIs provided by user space libraries to interact with the operating system. These APIs abstract the complexities of system calls and hardware interactions.

2. **Development Tools**: Tools like compilers, debuggers, and integrated development environments (IDEs) facilitate the creation and testing of user-space applications. For example, GCC is a widely-used compiler for C/C++ programs, while GDB is a powerful debugger.

3. **User Interface**: The user interface can be command-line-based (like bash) or graphical (like GNOME or KDE). Developing a robust and user-friendly interface is crucial for the usability of the operating system.

4. **Package Management**: Systems like APT, YUM, or pacman manage the installation, updating, and removal of software packages. A good package management system ensures that users can easily maintain their software environments.

By focusing on these aspects, we aim to create a robust and efficient operating system from the ground up, ensuring each component is carefully designed and integrated.

So that concludes the overall **BIG** picture of OS development. Now, we dig deeper in.

<hr />

Everything from hereon are just notes. Equally badly written, perhaps more. This is thinking out loud!!

## Things I do not understand

Ever-expanding list of what I do not understand. Some of it is a continuation of the above, most are also notes I am taking as I read through stuff.

1. How did we get here, pre-UNIX or DOS. You might notice how my recollection of the events above at least start at UNIX and QDOS, but not before that. I understand how the initial bunch of circuitry was made, how logic gates are made physically, and how calculations and computation can be done using just logic gates in real life. I also know of QDOS, UNIX, and how every derivative OS after that was always made on a computer running another OS. Linux was made on a UNIX system, MS-DOS was made on a QDOS computer, I am making my OS on ReactOS/macOS.....but how did we make the first bunch of kernels that would give the CLI for scripting?? That is it: just this small part of the equation; because once we have a CLI for scripting, literally everything else about the OS can be made on it. But hardcoding the stuff in a circuit that would give you that CLI...I do not know. I hope to know maybe a bit more in this journey, but I am not so optimistic about that, since I am using an already completely built OS to make mine (which is how all OS dev has been done ever since this little kernel to make this little CLI first hit).

Circuits, logic gates, magnetic tapes  |?????????| CLI which can then write modern OS scripts
<===================================== |?????????| ==========================================>

2. How the bootloader works. I know roughly about how a system POSTS, bootloader loads up a sequence of numbers in a specific memory positing, changes to Protected Mode, and loads up OS. How does it do on a code level?? Idk. I will stick to the GNU GRUB spec and Anvitha will be following the spec as well. If they suggest any changes that deviate from the GNU GRUB spec, I will try to incorporate them into my design. 

## The Kernel

Notes taken while perusing GNU/Hurd. 

So obviously, GNU/Hurd is incomplete af, which requires a great deal of engineering and perusing. So far, I have been just getting warmer to the entire codebase; and am actually considering between using Hurd or just building on top of Mach. 

In reference to the [GNU/Hurd on a Mach system](https://www.gnu.org/software/hurd/contributing.html), we come across a bunch of considerations to take upon when making a choice. 

The first thing that comes to head is why GNU/Hurd, and what it sets out to do. Hurd is still trying to be a UNIX compatible kernel, encompassing the entire functionality while going on about latching into existing GNU/Linux distributions. To use it with Mach, or to use just Mach, or to use none of these and try to code your own kernel is still all up in the air for me. 

This leads me to the second bit: the bootloader.

## The Bootloader.

Anvitha and I have discussed to use GNU GRUB as our spec, and that is it. It makes it easier to work with because I can start development on the OS, and be sure that things work out as long as they stick to the GRUB spec. 

This also means that the kernel itself will not have to worry about loading on to memory or checking for Protected Mode activation. It makes this first dive into OSes easier. 

The bootloader, in my understanding so far, is and can be completely different from the OS itself. 