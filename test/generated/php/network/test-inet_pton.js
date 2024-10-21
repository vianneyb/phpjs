// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var inet_pton = require('../../../../src/php/network/inet_pton.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/network/inet_pton.js (tested in test/generated/php/network/test-inet_pton.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'
    var result = inet_pton('::')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = '\x7F\x00\x00\x01'
    var result = inet_pton('127.0.0.1')
    expect(result).to.deep.equal(expected)
    done()
  })
})
