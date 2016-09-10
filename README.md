[![Build Status](https://travis-ci.org/mikeyhogarth/angular2-with-webpack.svg?branch=master)](https://travis-ci.org/mikeyhogarth/angular2-with-webpack)

# Angular 2 and Webpack Skeleton App

Skeleton application for using angular 2 with webpack - at time of writing the documentation for ng2 isn't all the 
way there yet so this may save you some of the pain I've had in getting the environment set up.

Includes:

* Angular 2 RC 6
* Routing 3 RC 2
* Pug (formerly Jade) templates
* SCSS styles
* One spec, component, template, module and stylesheet
* Tests with Karma

Largely inspired by the angular 2 example webpack setup but with a few bells and whistles. Please set expectations
suitably low for the [demo](https://mikeyhogarth.github.io/angular2-with-webpack/) that's deployed to gh-pages. Like,
seriously. All you get is two components and navigation between them.

# Getting Started
```
npm install && typings install
```

Requires npm and typings to be pre installed (if you've never used typings before, 
it's basically a package manager for typescript definition files - as if the universe
needed any more package managers!). It'll actually try and run `typings install` for you as a 
post install script - if it breaks because of this just take it out of the package.json 
file and get typings installed on your system.

Once installation completes;

```
npm test        # run the specs
npm start       # start webpack dev server on port 8080
npm run build   # build production dist
npm run deploy-demo # push to gh-pages (you'll need to change your base herf in index.html)
```

This is very much a "living repo" and so will change over time as the platform (or my opinions!) change - I would
love to hear your opinions on how this could be improved. If you do find this repo useful and you use it for your own 
projects please I encourage you to share any modifications you make with the community.
