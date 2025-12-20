---
title: "LaTeX Resources"
date: 2023-09-15T17:41:00+00:00
draft: false
tags: ["Academia", "Career", "Code", "Software", "Open Source", "Undergrad"]
url: "/2023/09/latex-resources.html"
---
# [![](/images/AVvXsEgLbdh8zrVouMB5GdARIAwxWLrBwgvpIQSRGMR_42aUTdpVpWizFpowHUfRnp2y51LihRz1zixHyfSjWlKfVH7BEJS2egJ0FbTyDHEJ3qYTiipP4GbTg14OVMEDGjyJUdIPX79-tyqPZfphyGpJq7N1QxRtv8WlASIUzCYUK4Qtj-HmFol5ALDP9vvXqlw=w640-h360)](/images/AVvXsEgLbdh8zrVouMB5GdARIAwxWLrBwgvpIQSRGMR_42aUTdpVpWizFpowHUfRnp2y51LihRz1zixHyfSjWlKfVH7BEJS2egJ0FbTyDHEJ3qYTiipP4GbTg14OVMEDGjyJUdIPX79-tyqPZfphyGpJq7N1QxRtv8WlASIUzCYUK4Qtj-HmFol5ALDP9vvXqlw)

 The following document compiles some of the tools I use for my LaTeX fender benders adventures. It is a non-exhaustive list, but should cover most things to get started with, and make your LaTeX life easier. 

### Basic Setup

- [Overleaf](https://overleaf.com): An online editor and debugger for LaTeX that works similar to Google Docs. Does not release anything on the Internet unless explicitly specified, and makes it such that you do not have to install LaTeX locally. The error messages are more descriptive as well.
- [MacTeX](https://www.tug.org/mactex/): I use a Mac, so MacTeX is the official repository to get a local LaTeX install. There's MikTeX for Windows and texlive-full for Linux.
- [VS Code LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop): If you do not like TeXStudio, you can use VS Code for editing LaTeX files. Supports ASCII lookups, debuggers, and autofill to make life easier as well. This plugin should be installed after you have a local LaTeX install.

### Nice to haves

- [DeTeXt](https://venkatasg.net/apps/detext): iOS app that lets you draw any math symbol and find the LaTeX implementation for the same. Web versions also exist out there.
- [Pandoc](https://pandoc.org): is a command-line based universal text converter, so it can technically convert any text format to any other. I typically use it to convert Markdown into LaTeX, but you can even convert docx to LaTeX, HTML to Markdown, and so on.
- [Detexify](http://detexify.kirelabs.org/classify.html): Web-based tool for drawing symbols to find their LaTeX commands. Similar to DeTeXt but browser-based.
- [LaTeX Table Generator](https://www.tablesgenerator.com/latex_tables): Online tool for visually creating LaTeX tables without having to write the markup manually.
- [Pix2Text](https://github.com/breezedeus/Pix2Text): Free and open-source Python alternative to Mathpix. Recognizes layouts, tables, images, text, and mathematical formulas. Install with `pip install pix2text`.
- [LaTeX-OCR](https://github.com/lukas-blecher/LaTeX-OCR): Open-source tool using Vision Transformer to convert equation images into LaTeX code. Has both CLI and GUI versions.

### Documentation & References

- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX): Comprehensive documentation covering everything from basics to advanced topics. Best free reference available.
- [CTAN](https://ctan.org/): The Comprehensive TeX Archive Network - official repository for LaTeX packages with documentation. Essential for finding and understanding packages.
- [LaTeX Symbol List](http://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf): The definitive 338-page reference for LaTeX symbols across all packages.
- [TikZ and PGF Manual](http://mirrors.ctan.org/graphics/pgf/base/doc/pgfmanual.pdf): Essential for creating graphics and diagrams directly in LaTeX.

### Package Management & Utilities

- [tlmgr](https://www.tug.org/texlive/tlmgr.html): TeX Live package manager for installing and updating LaTeX packages from command line.
- [LaTeXdiff](https://www.ctan.org/pkg/latexdiff): Command-line tool for showing differences between LaTeX documents, useful for tracking changes and revisions.
- [Arara](https://gitlab.com/islandoftex/arara): Automation tool for LaTeX compilation with rules-based processing.

### Templates & Document Classes

- [LaTeX Templates](https://www.latextemplates.com/): Large collection of professionally designed templates for articles, reports, presentations, and more.
- [Awesome CV](https://github.com/posquit0/Awesome-CV): Modern LaTeX template for creating impressive CVs and resumes.
- [IEEE LaTeX Templates](https://www.ieee.org/conferences/publishing/templates.html): Official templates for IEEE conference and journal papers.

### Graphics & Visualization

- [TikZ Examples](https://texample.net/tikz/): Large collection of TikZ code examples for creating diagrams, plots, and illustrations.
- [PGFPlots](http://pgfplots.sourceforge.net/): Package for creating publication-quality plots and charts directly in LaTeX.
- [Inkscape](https://inkscape.org/): Vector graphics editor with LaTeX export capabilities. Great for creating complex diagrams that can be imported into LaTeX documents.