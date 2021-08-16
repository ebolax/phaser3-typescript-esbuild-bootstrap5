# Phaser 3 + TypeScript + ESBuild + Bootstrap 5 + LiveReload Template

This repo contains a template to create a game using Phaser 3 + TypeScript with ESBuild bundler and Bootstrap 5 Framework. Also have Livereaload feature!

## Before you need

- git (on windows, [git for windows](https://git-scm.com/download/win) is recommended)
- node.js: available for all major platforms [here](https://nodejs.org/en/download/) (the LTS version is recommended)

A good code editor is also recommended and this repo is designed around [Visual Studio Code](https://code.visualstudio.com/)

## **Installation**

Note that if you have cloned this template repo via GitHub, then you'll need to change the URLs below to match _your_ repo's name:

```bash
git clone https://github.com/ebolax/phaser3-typescript-esbuild-bootstrap5
cd phaser3-typescript-esbuild-bootstrap5
npm install

# or
npx degit "ebolax/phaser3-typescript-esbuild-bootstrap5" mygame
cd mygame
npm install
```

## **Build and Run**

The `./dist/index.html` file contains a `<script src="index.js">` tag, which means we need to create `dist/index.js`. The npm command `npm run build` tells ESBuild to create this bundle, starting with `./src/index.js` and including all its dependencies.

    npm run dev

Builds the application to `dist/index.js` file and serve `./dist/index.html` file on `http://localhost:8000`

Watch ./src and ./dist folders to serve the files locally for changes and live reload browser (you need livereload plugin for your browser).

    npm run build

Builds the application and minify to `dist/index.js`. You must do it before you publish your game.

    npm run serve

It's just serve `./dist` folder to test your game.