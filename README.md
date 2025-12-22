# Amber Terminal Hugo Theme

A custom Hugo theme combining classic Macintosh typography with amber CRT terminal aesthetics. Features ASCII art, pixel-perfect rendering, and a blog-first design philosophy.

**Created:** December 2024  
**Hugo Version:** 0.153.1+  
**Author:** Kushagra Srivastava

---

## Table of Contents

1. [Overview](#overview)
2. [Directory Structure](#directory-structure)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Content Management](#content-management)
6. [Customization Guide](#customization-guide)
7. [Template Reference](#template-reference)
8. [CSS Architecture](#css-architecture)
9. [ASCII Art & Visual Elements](#ascii-art--visual-elements)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)
12. [Future Enhancements](#future-enhancements)

---

## Overview

### Design Philosophy

This theme merges two distinct aesthetics:

1. **Classic Macintosh (System 7 era):** Chicago font, clean typography, structured layouts, pixel-precise rendering
2. **Amber CRT Terminal:** Warm amber-on-black color scheme, scanline effects, blinking cursors, ASCII art decorations

The result is a nostalgic, readable blog theme that prioritizes content while maintaining strong visual identity.

### Key Features

- Amber monochrome color palette with glow effects
- CRT scanline overlay (subtle, non-intrusive)
- ASCII art header and footer decorations
- Date-first post listing (inspired by Chicago7 theme)
- Blinking cursor animations
- Chicago font with monospace fallbacks
- Fully responsive design
- No JavaScript dependencies (pure CSS)
- Clean, semantic HTML structure

---

## Directory Structure

```
your-hugo-site/
├── archetypes/
│   └── default.md
├── content/
│   ├── posts/
│   │   ├── my-first-post.md
│   │   └── another-post.md
│   └── about.md
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template (wraps everything)
│   │   ├── single.html      # Individual post/page template
│   │   ├── list.html        # Section listing template
│   │   └── terms.html       # Taxonomy listing (tags, categories)
│   └── index.html           # Homepage template
├── static/
│   ├── css/
│   │   └── classic-mac.css  # Main stylesheet
│   └── fonts/
│       └── ChicagoFLF.ttf   # Chicago font file
├── hugo.toml                 # Site configuration
└── README.md                 # This file
```

### File Purposes

| File | Purpose |
|------|---------|
| `baseof.html` | Master template containing `<html>`, `<head>`, and common elements (footer, ASCII art). All other templates extend this. |
| `index.html` | Homepage with ASCII header, site description, navigation, and recent posts list. |
| `single.html` | Template for individual blog posts and standalone pages. |
| `list.html` | Template for section pages (e.g., `/posts/`) showing all posts in that section. |
| `terms.html` | Template for taxonomy pages (e.g., `/tags/`) showing all terms. |
| `classic-mac.css` | All styling—colors, typography, layout, effects. |

---

## Installation

### Prerequisites

- Hugo Extended v0.153.0 or later (extended version required for some CSS features)
- Git (for version control and deployment)
- A text editor (VS Code, Sublime, vim, etc.)

### Fresh Installation

1. **Create a new Hugo site:**
   ```bash
   hugo new site my-blog
   cd my-blog
   ```

2. **Create the directory structure:**
   ```bash
   mkdir -p layouts/_default layouts/partials static/css static/fonts
   ```

3. **Copy theme files:**
   - Place `baseof.html`, `single.html`, `list.html`, `terms.html` in `layouts/_default/`
   - Place `index.html` in `layouts/`
   - Place `classic-mac.css` in `static/css/`

4. **Download the Chicago font:**
   - Search for "ChicagoFLF" font online
   - Place `ChicagoFLF.ttf` in `static/fonts/`
   - (Optional: the theme falls back to system monospace fonts if Chicago is unavailable)

5. **Configure your site** (see [Configuration](#configuration))

6. **Run the development server:**
   ```bash
   hugo server -D
   ```

### Migration from Another Theme

1. **Remove or comment out the theme setting** in `hugo.toml`:
   ```toml
   # theme = "old-theme-name"
   ```

2. **Copy the layout files** to your project's `layouts/` directory (not `themes/`)

3. **Review your content front matter** for compatibility (see [Content Management](#content-management))

4. **Test locally** before deploying

---

## Configuration

### Basic hugo.toml

```toml
baseURL = "https://yourdomain.com/"
languageCode = "en-us"
title = "Your Site Title"

[params]
  description = "A brief description of your site"
  github = "yourusername"
  email = "you@example.com"

[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Posts"
    url = "/posts/"
    weight = 2
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 3

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true  # Allows raw HTML in markdown

[taxonomies]
  tag = "tags"
  category = "categories"
```

### Configuration Options Explained

| Setting | Purpose |
|---------|---------|
| `baseURL` | Your production URL. Critical for correct links in production builds. |
| `title` | Site title shown in header and browser tab. |
| `params.description` | Tagline shown below the site title on homepage. |
| `params.github` | Your GitHub username (creates link in navigation). |
| `params.email` | Your email (creates mailto link). |
| `menu.main` | Navigation menu items. `weight` controls order. |
| `markup.goldmark.renderer.unsafe` | Enable raw HTML in markdown files. |
| `taxonomies` | Enable tags and categories for posts. |

### Optional Settings

```toml
# Pagination
paginate = 10

# Summaries
summaryLength = 50

# Date format
[params]
  dateFormat = "January 2, 2006"

# Code highlighting (Hugo built-in)
[markup.highlight]
  style = "monokai"
  lineNos = false
  codeFences = true
```

---

## Content Management

### Creating a New Post

```bash
hugo new posts/my-new-post.md
```

This creates a file at `content/posts/my-new-post.md` with default front matter.

### Front Matter Reference

```yaml
---
title: "My Post Title"
date: 2024-12-22T10:30:00-05:00
draft: false
tags: ["hugo", "web", "tutorial"]
categories: ["tech"]
description: "A brief summary for SEO and previews"
---
```

| Field | Required | Purpose |
|-------|----------|---------|
| `title` | Yes | Post title displayed in listings and page header |
| `date` | Yes | Publication date (affects sort order) |
| `draft` | No | If `true`, only visible with `hugo server -D` |
| `tags` | No | Taxonomy terms for tagging |
| `categories` | No | Taxonomy terms for categorization |
| `description` | No | Meta description for SEO |

### Content Organization

```
content/
├── posts/           # Blog posts (date-ordered listing)
│   ├── 2024-01-15-first-post.md
│   └── 2024-02-20-second-post.md
├── projects/        # Project pages (optional section)
│   └── my-project.md
├── about.md         # Standalone page at /about/
└── _index.md        # Optional: customize section listing pages
```

### Naming Conventions

**Recommended:** Prefix posts with dates for filesystem organization:
```
2024-12-22-my-post-title.md
```

The URL slug comes from the filename (minus date prefix if using permalinks config).

### Adding Images

1. **Option A: Static folder**
   ```
   static/
   └── images/
       └── my-image.png
   ```
   Reference in markdown: `![Alt text](/images/my-image.png)`

2. **Option B: Page bundles** (keeps images with content)
   ```
   content/
   └── posts/
       └── my-post/
           ├── index.md
           └── featured.png
   ```
   Reference in markdown: `![Alt text](featured.png)`

### Markdown Features Supported

- Standard markdown (headings, lists, links, images)
- Fenced code blocks with syntax highlighting
- Blockquotes
- Tables
- Raw HTML (if `unsafe = true` in config)
- Footnotes

---

## Customization Guide

### Changing Colors

Edit the CSS custom properties in `static/css/classic-mac.css`:

```css
:root {
  --bg: #0a0a08;           /* Main background */
  --bg-light: #121210;     /* Slightly lighter bg (code blocks) */
  --amber: #ffb000;        /* Primary amber */
  --amber-dim: #cc8800;    /* Muted amber (dates, borders) */
  --amber-bright: #ffc832; /* Bright amber (titles, hover) */
  --amber-glow: rgba(255, 176, 0, 0.15); /* Glow effect */
  --text: #ffb000;         /* Main text color */
  --text-dim: #997a00;     /* Dimmed text */
  --link: #ffc832;         /* Link color */
}
```

**Alternative Color Schemes:**

Green Phosphor (P1):
```css
:root {
  --amber: #33ff33;
  --amber-dim: #22aa22;
  --amber-bright: #66ff66;
  --amber-glow: rgba(51, 255, 51, 0.15);
  --text: #33ff33;
  --text-dim: #228822;
  --link: #66ff66;
}
```

Blue Terminal:
```css
:root {
  --amber: #00aaff;
  --amber-dim: #0077aa;
  --amber-bright: #33ccff;
  --amber-glow: rgba(0, 170, 255, 0.15);
  --text: #00aaff;
  --text-dim: #005588;
  --link: #33ccff;
}
```

### Changing Fonts

The theme uses Chicago font with fallbacks. To change:

1. **Use a different font file:**
   ```css
   @font-face {
     font-family: 'YourFont';
     src: url('/fonts/YourFont.ttf') format('truetype');
   }
   
   body {
     font-family: 'YourFont', 'Monaco', 'Consolas', monospace;
   }
   ```

2. **Use Google Fonts:**
   ```css
   @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
   
   body {
     font-family: 'VT323', monospace;
   }
   ```

**Recommended Retro Fonts:**
- VT323 (Google Fonts) - classic terminal
- IBM Plex Mono (Google Fonts) - clean monospace
- Fira Code - programming font with ligatures
- JetBrains Mono - modern monospace

### Modifying the ASCII Header

Edit `layouts/index.html` and find the `<pre class="ascii-header">` block.

**Generate ASCII art at:**
- https://patorjk.com/software/taag/ (text to ASCII)
- https://www.asciiart.eu/ (pre-made art)
- https://asciiflow.com/ (draw your own)

**Tips:**
- Use fonts like "Standard", "Small", or "Banner" for readable results
- Test at different screen widths
- Escape any characters that conflict with HTML (`<`, `>`, `&`)

### Modifying the Footer ASCII Art

Edit `layouts/_default/baseof.html` and find the `<pre class="ascii-footer">` block.

Current footer shows a small Mac icon. Replace with any ASCII art you prefer.

### Disabling CRT Scanlines

Remove or comment out this block in `classic-mac.css`:

```css
/* CRT scanline effect */
body::before {
  /* ... */
}
```

### Adjusting the Scanline Intensity

```css
body::before {
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.05) 0px,  /* Lower = more subtle */
    rgba(0, 0, 0, 0.05) 1px,
    transparent 1px,
    transparent 2px
  );
}
```

### Removing the Blinking Cursor

Remove instances of `<span class="cursor"></span>` from templates, or hide via CSS:

```css
.cursor {
  display: none;
}
```

### Changing Post List Style

Current style shows date on left, title on right. To flip:

```css
.post-item {
  flex-direction: row-reverse;
}

.post-date {
  text-align: right;
}
```

For a simpler list without dates:

```html
<ul class="post-list">
  {{ range .Pages }}
  <li class="post-item">
    <a href="{{ .Permalink }}" class="post-link">{{ .Title }}</a>
  </li>
  {{ end }}
</ul>
```

---

## Template Reference

### Hugo Templating Basics

Hugo uses Go's `html/template` package. Key concepts:

| Syntax | Purpose |
|--------|---------|
| `{{ .Title }}` | Output a variable |
| `{{ with .Params.x }}...{{ end }}` | Conditional block if value exists |
| `{{ range .Pages }}...{{ end }}` | Loop over collection |
| `{{ if condition }}...{{ else }}...{{ end }}` | Conditional |
| `{{ partial "name" . }}` | Include a partial template |
| `{{ block "name" . }}...{{ end }}` | Define overridable block |
| `{{ define "name" }}...{{ end }}` | Override a block |

### Template Inheritance

```
baseof.html (base template)
    │
    ├── index.html (homepage, defines "main" block)
    ├── single.html (posts/pages, defines "main" block)
    ├── list.html (sections, defines "main" block)
    └── terms.html (taxonomies, defines "main" block)
```

`baseof.html` contains the shell (`<html>`, `<head>`, footer). Other templates fill in the `{{ block "main" . }}` section.

### Available Variables

**Site-wide (`.Site`):**
- `.Site.Title` - Site title from config
- `.Site.Params.description` - Site description
- `.Site.Params.github` - GitHub username
- `.Site.BaseURL` - Base URL
- `.Site.Menus.main` - Main menu items
- `.Site.RegularPages` - All regular content pages

**Page-specific (`.`):**
- `.Title` - Page title
- `.Content` - Rendered markdown content
- `.Date` - Publication date
- `.Permalink` - Full URL to page
- `.ReadingTime` - Estimated reading time (minutes)
- `.Params.tags` - Tags array
- `.PrevInSection` - Previous page in section
- `.NextInSection` - Next page in section

### Creating a New Template

Example: Custom template for projects section.

1. Create `layouts/projects/single.html`:
   ```html
   {{ define "main" }}
   <article class="project">
     <h1>{{ .Title }}</h1>
     {{ with .Params.repo }}
     <a href="https://github.com/{{ . }}">View on GitHub</a>
     {{ end }}
     <div class="post-content">
       {{ .Content }}
     </div>
   </article>
   {{ end }}
   ```

2. Create content at `content/projects/my-project.md`:
   ```yaml
   ---
   title: "My Project"
   repo: "username/repo"
   ---
   Project description here...
   ```

### Adding Partials

Partials are reusable template fragments. Create `layouts/partials/`:

```html
<!-- layouts/partials/post-meta.html -->
<div class="post-meta">
  {{ .Date.Format "January 2, 2006" }}
  {{ with .Params.tags }} · {{ delimit . ", " }}{{ end }}
  · {{ .ReadingTime }} min read
</div>
```

Use in templates:
```html
{{ partial "post-meta" . }}
```

---

## CSS Architecture

### File Organization

The CSS is organized in sections:

1. **Font imports and custom properties** (`:root`)
2. **Reset and base styles** (`*`, `html`, `body`)
3. **Layout components** (`.site-container`, etc.)
4. **Typography** (headings, paragraphs, links)
5. **Post listing styles** (`.post-list`, `.post-item`)
6. **Single post styles** (`.post-header`, `.post-content`)
7. **Interactive elements** (buttons, navigation)
8. **Decorative elements** (ASCII, cursor, dividers)
9. **Utility classes** (`.pixel-decoration`, etc.)
10. **Responsive styles** (`@media` queries)

### Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.site-container` | Max-width wrapper for content |
| `.site-header` | Header section with title and nav |
| `.site-title` | Main site title styling |
| `.site-nav` | Navigation links container |
| `.post-list` | Unordered list of posts |
| `.post-item` | Individual post in listing |
| `.post-link` | Link styling for post titles |
| `.post-date` | Date display styling |
| `.post-content` | Article content wrapper |
| `.divider` | Single line divider |
| `.divider-double` | Double line divider |
| `.ascii-header` | Large ASCII art styling |
| `.ascii-footer` | Footer ASCII art styling |
| `.cursor` | Blinking cursor animation |

### Responsive Breakpoints

```css
/* Mobile: 600px and below */
@media (max-width: 600px) {
  /* Adjustments for small screens */
}
```

Current responsive changes:
- Reduced padding on body
- Smaller ASCII art font size
- Post items stack vertically (date above title)

### Adding New Styles

1. **Add to appropriate section** in CSS file
2. **Use CSS custom properties** for colors:
   ```css
   .my-new-element {
     color: var(--amber);
     border-color: var(--amber-dim);
   }
   ```
3. **Test on mobile** using browser dev tools

---

## ASCII Art & Visual Elements

### ASCII Art Resources

**Text Generators:**
- [TAAG](https://patorjk.com/software/taag/) - Text to ASCII Art
- [ASCII Art Generator](https://www.ascii-art-generator.org/) - Image to ASCII

**Pre-made Art:**
- [ASCII Art Archive](https://www.asciiart.eu/)
- [Christopher Johnson's ASCII Art](https://asciiart.website/)

**Drawing Tools:**
- [ASCIIFlow](https://asciiflow.com/) - Draw diagrams
- [Monodraw](https://monodraw.helftone.com/) - Mac app for ASCII art

### Adding Pixel Art Images

For actual pixel art images (not ASCII):

1. Create or find a small pixel art image
2. Save as PNG with transparency if needed
3. Add to `static/images/`
4. Use in templates or markdown:
   ```html
   <img src="/images/pixel-icon.png" class="pixel-decoration" alt="Icon">
   ```

The `.pixel-decoration` class ensures crisp rendering:
```css
.pixel-decoration {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

### Creating Themed Dividers

ASCII dividers you can use:

```
═══════════════════════════════════════
───────────────────────────────────────
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────┐
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔═══════════════════════════════════════╗
```

---

## Deployment

### GitHub Pages Deployment

1. **Create `.github/workflows/hugo.yml`:**

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.153.1
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Install Hugo
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
          sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Build
        run: hugo --minify
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Configure GitHub repository:**
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

3. **Set baseURL** in `hugo.toml`:
   ```toml
   baseURL = "https://username.github.io/repo-name/"
   ```

4. **Push to main branch** - deployment happens automatically

### Custom Domain Setup

1. **Add CNAME file** at `static/CNAME`:
   ```
   yourdomain.com
   ```

2. **Configure DNS** with your registrar:
   - For apex domain: A records pointing to GitHub's IPs
   - For subdomain: CNAME record to `username.github.io`

3. **Update baseURL**:
   ```toml
   baseURL = "https://yourdomain.com/"
   ```

### Alternative Hosting

**Netlify:**
1. Connect repository to Netlify
2. Build command: `hugo --minify`
3. Publish directory: `public`

**Vercel:**
1. Import repository to Vercel
2. Framework preset: Hugo
3. Build command: `hugo --minify`

**Cloudflare Pages:**
1. Connect repository
2. Build command: `hugo --minify`
3. Build output directory: `public`

---

## Troubleshooting

### Common Issues

**"found no layout file" warnings:**
- Ensure all template files are in correct locations
- Check for typos in filenames
- Verify `theme` is not set in config (or is commented out)

**Styles not loading:**
- Check CSS file path: should be `static/css/classic-mac.css`
- Verify the `<link>` tag path in `baseof.html`
- Clear browser cache (Ctrl+Shift+R)

**Font not rendering:**
- Verify font file is in `static/fonts/`
- Check `@font-face` path in CSS matches actual filename
- Font falls back to monospace if file is missing (this is fine)

**ASCII art looks broken:**
- Ensure `white-space: pre` is set
- Check for unescaped HTML characters (`<`, `>`, `&`)
- Reduce font size if wrapping occurs

**Posts not showing:**
- Check `draft: false` in front matter
- Verify posts are in `content/posts/` directory
- Ensure date is not in the future

**Changes not reflecting:**
- Hugo server hot-reloads, but sometimes needs restart
- Run `hugo server --disableFastRender` for full rebuilds
- Delete `public/` folder and rebuild: `rm -rf public && hugo`

### Debug Mode

Run Hugo with verbose output:
```bash
hugo server -D --verbose
```

Check what pages Hugo sees:
```bash
hugo list all
```

### Browser DevTools

1. **Right-click → Inspect** to open DevTools
2. **Elements tab:** Check HTML structure
3. **Console tab:** Look for errors
4. **Network tab:** Verify CSS/fonts are loading
5. **Responsive mode:** Test different screen sizes

---

## Future Enhancements

Ideas for extending this theme:

### Features to Add

- [ ] Dark/light theme toggle
- [ ] Search functionality (using Pagefind or Fuse.js)
- [ ] Table of contents for long posts
- [ ] Reading progress indicator
- [ ] Comments (using Giscus or similar)
- [ ] RSS feed styling
- [ ] Syntax highlighting theme matching amber palette
- [ ] Image lightbox/zoom
- [ ] Related posts section
- [ ] Archive page by year/month

### Visual Enhancements

- [ ] More ASCII art decorations
- [ ] Animated ASCII art (CSS animations)
- [ ] Custom 404 page with ASCII art
- [ ] Loading screen effect
- [ ] "Boot sequence" animation on first visit
- [ ] Custom cursor
- [ ] Sound effects (optional, with toggle)

### Technical Improvements

- [ ] Critical CSS inlining
- [ ] Font subsetting (reduce Chicago font size)
- [ ] Image optimization pipeline
- [ ] SEO meta tags partial
- [ ] Open Graph / Twitter cards
- [ ] JSON-LD structured data
- [ ] Accessibility audit and improvements
- [ ] Print stylesheet

---

## Quick Reference

### Common Commands

```bash
# Start development server
hugo server -D

# Build for production
hugo --minify

# Create new post
hugo new posts/my-post.md

# Create new page
hugo new about.md

# List all content
hugo list all

# Check Hugo version
hugo version
```

### File Locations

| What | Where |
|------|-------|
| Site config | `hugo.toml` |
| Blog posts | `content/posts/` |
| Standalone pages | `content/` |
| Templates | `layouts/` |
| Styles | `static/css/classic-mac.css` |
| Fonts | `static/fonts/` |
| Images | `static/images/` |
| Built site | `public/` (gitignored) |

### Useful Links

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Discourse Forum](https://discourse.gohugo.io/)
- [Go Template Documentation](https://pkg.go.dev/text/template)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

## License

This theme is provided as-is for personal use. Feel free to modify and adapt for your own projects.

---

*Last updated: December 2025*