'use strict'

const test = require('tape')
const inBrowser = require('is-in-browser').default

const ponyfilledBuffer = require('..')

test('test should run in the browser', (t) => {
	t.plan(2)

	t.strictEqual(process.browser, true)
	t.strictEqual(inBrowser, true, 'not running in the browser')
})

test('should return a `Buffer`-like` thing', (t) => {
	t.plan(3)

	t.strictEqual(typeof ponyfilledBuffer, 'function')
	const buf = Buffer.alloc(1)
	t.ok(buf)
	t.strictEqual(typeof buf.readInt8, 'function')
})
