THIS DOCUMENT IS IN PROGRESS. THIS PARAGRAPH SHALL BE REMOVED WHEN THIS DOCUMENT IS DONE.

### Tech Stack
- react
- redux
- react-router-dom (v4)
- react-intl (internationalization)
- webpack v2: separate sets for development & production
- postcss/cssnext, css modules
- source maps
- surge deploy
- continuous deployment (with Netlify)
- yarn (package manager) as alternative to npm 


### Getting started
```
$ yarn install
// install all dependencies
```
```
$ yarn dev
// start development with webpack-dev-server
```
```
$ yarn deploy:surge
// make production build and deploy to the surge.sh
```
```
$ yarn translate
// combine separate translation-jsons into one (en.json) - for translators
```

###Syntax
ES-2015 (without modules, because webpack2 supports them by default), features >= stage2 (for example, arrow func in react components)

###Styles
[.pcss] - local styles. With css-modules option for incapsulate component's styles
[.gcss] - global styles. Have special rule in webpack config. No need to use :global identifier in gcss files.

- css-next features
- separate file with vars
- no px! only rem units

###Before deployment to the Surge
Edit CNAME file: write subdomain name for surge.sh service, for example 
```
surge-static.surge.sh
``