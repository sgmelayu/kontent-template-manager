## Hosted app 

https://kentico.github.io/cloud-template-manager/

### Running application locally

Download/clone this repository and run following commands:

```
npm i
npm start 
```

Since the application is build in Angular, you can also use `ng serve` command to run application.

#### :warning: Limitations

See [a list of limitations](https://kentico.github.io/cloud-template-manager/limitations) before you started.

### Publishing to GitHub pages

Under root, generate app with

```
npm run build-gh-pages
npx ngh --dir=dist
```
