'use strict'

const test = require('tape')

const ponyfilledBuffer = require('..')

test('test should run in Node', (t) => {
	t.plan(1)
	t.notOk(process.browser)
})

test('should return the native `Buffer`', (t) => {
	t.plan(1)
	t.strictEqual(ponyfilledBuffer, Buffer)
})
