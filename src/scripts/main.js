// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  bespokeFx = require('bespoke-fx'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  themeEmber = require('../../bespoke-theme-ember/dist/bespoke-theme-ember');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  hash(),
  progress(),
  themeEmber(),
  bespokeFx({
    direction: "horizontal",
    transition: "move-both-fade"
  })
]);

// Highlight.js
var hljs = require('highlight.js/lib/highlight');

hljs.registerLanguage('htmlbars', require('highlight.js/lib/languages/htmlbars'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

hljs.initHighlightingOnLoad();

