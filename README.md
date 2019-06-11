## Kentico Cloud Template Manager

[![Template manager](https://img.shields.io/badge/-Template%20Manager-brightgreen.svg)](https://kentico.github.io/cloud-template-manager/)

[![Build Status](https://api.travis-ci.com/Kentico/cloud-template-manager.svg?branch=master)](https://travis-ci.com/Kentico/cloud-template-manager)

### Running application locally

Download/clone this repository and run following commands:

```sh
npm i
npm start
```

Since the application is build in Angular, you can also use `ng serve` command to run application.

#### :warning: Limitations

See [a list of limitations](https://kentico.github.io/cloud-template-manager/limitations) before you get started.

### Publishing to GitHub pages

Under root, generate app with

```sh
npm run build-gh-pages
npx ngh --dir=dist
```

## Submitting Web Template to Templates Gallery

If you want to submit a Kentico Cloud Web Template to the [Templates Gallery](https://kentico.github.io/cloud-template-manager/templates), please make sure to follow below mentioned guidelines. Once your repository is ready, please adjust [/templates/list.json](/templates/list.json) and create a pull request.

### Guidelines for Web Templates

* Every template has its own GitHub repository
* The source code is available under MIT license (open-source)

#### Repository structure

* **/source**<br>Contains template implementation (open-source)
    
* **content.zip**<br>ZIP package generated via [https://kentico.github.io/cloud-template-manager](https://kentico.github.io/cloud-template-manager)

* **template.jpg**<br>Screenshot/image of the template in 3:2 ratio, e.g. 600x400px (min. 450x300px), in JPG format (no other format is allowed)

* **README.md**
  * Instructions to run the site<br>These do not need to include the steps to import the content from import package to KC as it is common for all templates.
  * Which resources were used to build the template, e.g.
    * original template (e.g. Multiverse template by HTML5UP.net)
    * image sources (e.g. Demo images by Unsplash.com)
    * implementation technology (e.g. Vue.js)
* **LICENSE** (optional)

The repository **may not** contain any other files in the root directory.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/cloud-template-manager?pixel)
