Single page application. Personal portfolio project. Place for experiments, spending evenings and weekends.


### Tech Stack
- react
- redux, react-redux
- react-router-dom (v4)
- react-intl (internationalization)
- cloudinary
- offline-plugin
- webpack v4: separate sets for development & production
- postcss/cssnext, css modules


### Features
- Implemented internationalization with react-intl for English and Russian speakers. With browser language auto detect
- All images are stored in Cloudinary CDN for fast and reliable delivery
- Favicon set is stored on Firebase CDN (since I am using them in multiple personal projects)
- Continuous deployment with generous Netlify service
- Responsive components (on init and on resize)
- Flexbox for layout instead of grid libraries
- px free styles. Only relative units: rem & vw, vh
- Encapsulated component styles with CSS modules


#### Syntax
ES-2016, features >= stage2 (for example, arrow func in react components)

#### Styles
[.pcss] - local styles. With css-modules option for incapsulate component's styles
[.gcss] - global styles. Have special rule in webpack config. No need to use :global identifier in gcss files.


#### Getting started
```
$ yarn install
// install all dependencies
```
```
$ yarn dev
// start development with webpack-dev-server
```
```
$ yarn dev:mobile
// allows to debug app on multiple connected devices
```
```
$ yarn translate
// combine separate translation-jsons into one (en.json) - for translators
```