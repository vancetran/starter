Starter
=======

>"As Vance grew weary of setting up yet another project, he decided to create a starter template for all future projects - one that he could steadily refine and improve over time  with all the new things he learns every day." - *Annals of Modern Web Development, vol. MMXIV*

## Installation

Make sure your system has [Node.js](http://nodejs.org/), [Git](http://git-scm.com/), and [Bower](http://bower.io/) installed.

Run these commands to install required Node modules and various libraries/frameworks like jQuery and Bootstrap.

### Node Modules

```sh
$ npm install
```

### Bower

```sh
$ npm install -g bower
$ bower install
```

### Grunt

```sh
$ npm install -g grunt
$ npm install -g grunt-cli
```

## Simple Server

> Serving Suggestion: [Play this](https://www.youtube.com/watch?v=GyAJ4V06izg&feature=kp) and shout "SERVER!" each time you hear "song".

To start server and open a new browser window pointing at the dev environment:

```sh
$ node server
```

Start a server and view the results of a build

```sh
$ node server build
```

## Development and Building

### During development

Watch your Less and convert to CSS on file change

```sh
$ grunt dev
```

### Generate a build

Concatenates, minifies, and copies files to /build

```sh
$ grunt
```
