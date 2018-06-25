# buffer-ponyfill

**Use the [Node core `buffer` module](https://nodejs.org/api/buffer.html), in Node, browsers and [react-native](https://facebook.github.io/react-native/).** Powered by the lovely [`feross/buffer`](https://github.com/feross/buffer). ❤️

*Note*: If you're just building a web project, both [Browserify](http://browserify.org) and [Webpack](https://webpack.js.org/) will add shims automatically if you use `Buffer`, so in this case `buffer-ponyfill` is not necessary. This package can help you with [react-native](https://facebook.github.io/react-native/) though.

[![npm version](https://img.shields.io/npm/v/buffer-ponyfill.svg)](https://www.npmjs.com/package/buffer-ponyfill)
[![build status](https://api.travis-ci.org/derhuerst/buffer-ponyfill.svg?branch=master)](https://travis-ci.org/derhuerst/buffer-ponyfill)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/buffer-ponyfill.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install buffer-ponyfill
```


## Usage

```js
const Buffer = require('buffer-ponyfill')
// use it
```


## Contributing

If you have a question or have difficulties using `buffer-ponyfill`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/buffer-ponyfill/issues).
