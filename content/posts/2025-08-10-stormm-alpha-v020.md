---
title: "STORMM: Alpha v0.2.0"
date: 2025-08-10T15:02:00+00:00
draft: false
tags: ["Career", "Code", "Open Source", "Software"]
url: "/2025/08/stormm-alpha-v020.html"
---
[](/images/Screenshot%202025-07-15%20at%2015.36.30.png)[](/images/Screenshot%202025-07-15%20at%2015.36.30.png)[![](/images/AVvXsEgXusnhsbEyroIA5x2Oxtyb6MhKz0JcntasG9sIG2iKFitPNBPiST1DTodtgU4T8h8WrMRf5vrGxKtgiLIhmgSB7ehQ5i_7hVZ7qr2eKOR-keOuQeV9XKeyyW_J8CaTV5tbwwEgizTlKE7XTcx3-up1hz55GagRMC1IvZKqBT4ViSrrjX_pNBLr1W4isDo=w640-h495)](/images/AVvXsEgXusnhsbEyroIA5x2Oxtyb6MhKz0JcntasG9sIG2iKFitPNBPiST1DTodtgU4T8h8WrMRf5vrGxKtgiLIhmgSB7ehQ5i_7hVZ7qr2eKOR-keOuQeV9XKeyyW_J8CaTV5tbwwEgizTlKE7XTcx3-up1hz55GagRMC1IvZKqBT4ViSrrjX_pNBLr1W4isDo)

The STORMM Landing Page

Writing this as a quick update: but I have been honored and excited to contribute to the release of [STORMM](https://stormm/psivant.com) alpha v0.2.0. STORMM is a molecular mechanics package-- currently developed by [Psivant Therapeutics](https://psivant.com)-- that utilizes GPU Compute to conduct multiple molecular mechanics simulations in parallel. 

You can read all about this update under the [release page](https://github.com/Psivant/stormm/releases/tag/v0.2.0), as well as read everything about the toolchain and how to get started with it in the [STORMM Website](https://stormm.psivant.com) which I also helped develop and deploy.

My role in this project, once I was done learning and interning, was to undertake the engineering aspects of STORMM. The following post is more aligned towards writing some reflections and learnings as we optimized STORMM, lowered the barrier of entry, made it more accessible for Open Source communities, and deployed the next version.

Before we begin, I would also love to take a moment and thank [Dave Cerutti](https://www.linkedin.com/in/david-cerutti-11321129/) and [Woody Sherman](https://www.linkedin.com/in/woodysherman/) for spearheading the project and giving me an opportunity to contribute; as well as colleagues from Psivant and broader Open Source contributors for their valuable insights.

## The Barrier of Entry
A big undertaking that was taken with the second alpha release of STORMM was to generate more interest in the software from the broader open source community. This required a comprehensive **overhaul of the build system and packaging process**. We focused on making STORMM easier to build, deploy, and use across different platforms.

Part of this effort involved **containerization**, which means we've provided ready-to-use **Dockerfiles**. These files allow users to easily set up both CPU-only and CPU+GPU versions of STORMM without having to manually install all the dependencies. For more advanced users, we also created pipelines to deploy custom Singularity images, giving you full control over your environment. This significantly lowers the barrier to entry by abstracting away complex installation steps and dependency management.

We also put a lot of work into **documentation**. A lot of open-source projects fail to provide sufficient documentation to get started. Each program in STORMM now has a command-line navigable manual of all its input commands, as well as a website acting as a single source of truth. Moreover, the website has doxygen-generated pages which can be used in conjunction with the STORMM source code to gather further information on how everything works.

## Space Complexity
From what I gathered, STORMM saw an exponential rise in its capabilities between the years 2022 and 2025. With that, the codebase also grew from some 75-100k lines to over 300k. In October of last year, we ran into a peculiar issue where compiling STORMM on any device with less than 64GB RAM would crash the entire system, as it would try to use more RAM than available. To ensure the program is accessible, this RAM limit was far too high.

This issue incited a re-work of the STORMM build system, with a separation of the CPU code, GPU code, and the memory overhead caused by CMake. The current version essentially builds the CPU version of STORMM, frees up memory, builds the GPU version, links them together, and then builds any external packages. 

The first version of this implementation bought down our memory footprint from about 68-70GB RAM usage to 19GB max. 

The second iteration of a better build process included limiting the number of threads and resource usage. We built methods in the CMakeLists to check existing system processes to ensure that enough resources are available for STORMM compiling. During each intermediate step, the same check is done again (for example, when the CPU compilation is done and we are moving forward to the GPU compilation). If enough resources are not available, the build and compile step is paused until the resources are available again.

Alongside sensible defaults, we also give users the option to select their own number of threads/RAM limits for compilation, lowering the barrier of usage. The build process constantly checks for memory usages, and pauses if it deems that other processes need resources to continue. 

These defaults ensure that STORMM can be compiled on sensible resources. As a side note: these efforts bought the CI/CD pipeline's test/deploy time down from 45-50 minutes to about 5.

## Dynamic Hardware Detection
In addition to optimizing our resource usage, we also expanded STORMM's reach by standardizing the entire codebase with **C++17 standards** to ensure **cross-platform support**. The build process now dynamically detects the hardware, whether it's a CPU or GPU, to build the appropriate executables. This new system has been tested on a variety of UNIX and UNIX-like operating systems, including Fedora, Debian, Ubuntu, macOS (for CPU only), and Alpine Linux. This allows a much wider range of developers and researchers to use and contribute to STORMM, no matter what operating system they are using.

As a user, you were able to choose the architecture and hardware you want to deploy STORMM on. However, the build processes can now also detect the GPU at hand to select the latest version of CUDA Compute, the amount of RAM and other system processes to ensure a smooth compilation, and the number of CPU cores to effectively leverage every single one for parallel compilation. These variables can all be overridden ad tweaked with manual inputs, and it ensures that STORMM respects other processes, and is fit for large scale deployment and computation.

## External Package Management
A significant aspect of improving STORMM's build process was tackling the complex and often painful world of **C/C++ dependency management**. Unlike other languages with well-established package managers, C++ can be a challenge. We needed a reliable way to handle external libraries, ensuring they could be easily integrated and built consistently across all supported platforms.

My work centered on creating a robust pipeline that automates this process. The new system allows developers to add new C/C++ libraries with minimal effort. This involves a modular approach to our build system, which can now fetch, compile, and link external dependencies without requiring manual configuration by the user. 

The big aspect of package management in STORMM relies on the **sandboxing** of external packages in the context of our build directory, and not touching any system directories. **You do not need root privileges** to build/compile STORMM or the external packages it requires, and removing the build directory ensures all STORMM-related files and packages have been removed from the system. The linking of external packages is also done dynamically in the background to ensure any C++ compiler recognizes paths to such references in STORMM source code. Third party libraries and packages are all downloaded and compiled in [*{stormm_build_dir}/third_party].*

To validate this new system, we successfully integrated two critical third-party libraries: **PocketFFT** and **NetCDF**. PocketFFT is a highly optimized Fast Fourier Transform library, which will be instrumental for future performance-critical computations. NetCDF is a widely-used format for storing scientific data, and its integration allows STORMM to handle and export data in a standardized, interoperable format that is familiar to the scientific computing community. This pipeline paves the way for a more adaptable STORMM, where the community can easily add their own tools and packages.

## Documentation

One of the most crucial undertakings for STORMM v0.2.0 was creating a **comprehensive documentation website**. With a codebase exceeding 300,000 lines, we knew that welcoming new contributors and users required more than just in-code comments. A centralized, searchable, and well-structured resource was non-negotiable.

The goal was to create a "single source of truth" for all things STORMM. The website serves multiple audiences:

- **Users:** They need to get started quickly. We created a guided user manual, tutorials for common use cases, and clear installation instructions for our containerized environments.

- **Developers:** They need to understand the codebase and contribution process. We developed a detailed developer guide that explains the system architecture, code standards, and how to use the new developer tools to create new keywords and control blocks. The website is also where we host a detailed API reference, automatically generated from the source code, to help with navigation.

- **Community:** The website provides a home for our project. It links to our release notes, our GitHub repository, and provides a clear outline of our project's mission and how to get involved.

Any changes to the documentation files are automatically built and deployed to the live site, ensuring that our documentation always stays up to date with the latest code. This focus on documentation not only lowers the barrier to entry but also fosters a more engaged and empowered open-source community around STORMM.
