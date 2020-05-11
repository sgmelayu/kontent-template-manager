## Kentico Kontent Template Manager

[![Template manager](https://img.shields.io/badge/-Template%20Manager-brightgreen.svg)](https://kentico.github.io/kontent-template-manager/)

[![Build Status](https://api.travis-ci.com/Kentico/kontent-template-manager.svg?branch=master)](https://travis-ci.com/Kentico/kontent-template-manager)

### About

This web based application can be used to `backup` & `restore` Kentico Kontent projects. Under the hood it uses [Kontent backup manager](https://github.com/Kentico/kontent-backup-manager-js) which can be used independently using CLI in case you need to automate your backup processes.

### Running application locally

Download/clone this repository and run following commands:

```sh
npm i
npm start
```

Since the application is build in Angular, you can also use `ng serve` command to run application.

### Publishing to GitHub pages

Under root, generate app with

```sh
npm run build-gh-pages
npx ngh --dir=dist
```

## Submitting Web Template to Templates Gallery

If you want to submit a Kentico Kontent Web Template to the [Templates Gallery](https://kentico.github.io/kontent-template-manager/templates), please make sure to follow below mentioned guidelines. Once your repository is ready, please adjust [/templates/list.json](/templates/list.json) and create a pull request.

### Guidelines for Web Templates

* Every template has its own GitHub repository
* The source code is available under MIT license (open-source)

#### Repository structure

* **/source**<br>Contains template implementation (open-source)

    * (optional) - it is also possible to place the source code under the root folder, if there are no conflicts with the other files
    
* **content.zip**<br>ZIP package generated via [https://kentico.github.io/kontent-template-manager](https://kentico.github.io/kontent-template-manager)

* **template.jpg**<br>Screenshot/image of the template in 3:2 ratio, e.g. 600x400px (min. 450x300px), in JPG format (no other format is allowed)

* **README.md**
  * Instructions to run the site<br>These do not need to include the steps to import the content from import package to KK as it is common for all templates.
  * Which resources were used to build the template, e.g.
    * original template (e.g. Multiverse template by HTML5UP.net)
    * image sources (e.g. Demo images by Unsplash.com)
    * implementation technology (e.g. Vue.js)
* **LICENSE** (optional)

The repository **may not** contain any other files in the root directory.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-template-manager?pixel)
