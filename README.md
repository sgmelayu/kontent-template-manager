## https://kentico.github.io/kc-project-manager/

### Running application locally

Download/clone this repository and run following commands:

```
npm i
npm start 
```

Since the application is build in Angular, you can also use `ng serve` command to run application.

### Publishing to GitHub pages

Under root, generate app with

```
npm run build-gh-pages
npx ngh --dir=dist
```
