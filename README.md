# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

<b>If you're seeing this page as a regular visitor, the website is currenty under maintainance</b>

Visit an [archived](https://suobset.github.io/archive/web_v2/) version of the old website.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Installing Node.js 18 with NVM

Follow these steps to install Node Version Manager (NVM), use it to install Node.js 18, and set it as the default version.

**1. Install NVM:**

Open your terminal and run the following command to install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

**2. Close and Reopen Your Terminal:**

After installing NVM, you might need to close and reopen your terminal, or run the following command to start a new shell session:

```bash
source ~/.bashrc
```

**3. Install npm**

This will download and install Node.js 18. It may take a few minutes depending on your internet connection.

```bash
nvm install 18
```

**4. Set nodejs 18 as default**

This will make Node.js 18 your default version.

```bash
nvm alias default 18
```
