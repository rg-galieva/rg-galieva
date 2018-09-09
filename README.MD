Single page application. Personal portfolio project. Place for experiments, spending evenings and weekends.


### Tech Stack
- react (v16)
- redux (v4) 
- react-router-dom (v4)
- react-intl (internationalization)
- cloudinary
- offline-plugin
- webpack v4: separate sets for development & production
- sass, css modules
- eslint
- jest + enzyme


### Features
- Implemented internationalization with react-intl for English and Russian speakers. With browser language auto detect
- All images are stored in Cloudinary CDN for fast and reliable delivery
- Favicon set is stored on Firebase CDN (since I am using them in multiple personal projects)
- Continuous deployment with generous Netlify service
- Responsive components (on init and on resize)
- Flexbox for layout instead of grid libraries
- px free styles. Only relative units: rem & vw, vh
- Local component styles with CSS modules 


#### Syntax
ES-2015, features >= stage2 (babel)


#### Getting started
```
$ npm i
// install all dependencies
```
```
$ npm run dev
// start development with webpack-dev-server
```
```
$ npm run dev:mobile
// allows to debug app on multiple connected devices
```
```
$ npm run translate
// combine separate translation-jsons into one (en.json) - for translators
```