[![Build Status](https://secure.travis-ci.org/green-arrow/bespoke-theme-ember.png?branch=master)](https://travis-ci.org/green-arrow/bespoke-theme-ember)

# bespoke-theme-ember

A theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) based on the Ember.js website &mdash; [View demo](http://green-arrow.github.io/bespoke-theme-ember)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/green-arrow/bespoke-theme-ember/master/dist/bespoke-theme-ember.min.js
[max]: https://raw.github.com/green-arrow/bespoke-theme-ember/master/dist/bespoke-theme-ember.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  ember = require('bespoke-theme-ember');

bespoke.from('#presentation', [
  ember()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.ember()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-ember
```

### Bower

```bash
$ bower install bespoke-theme-ember
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
