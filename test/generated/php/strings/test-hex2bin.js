// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var hex2bin = require('../../../../src/php/strings/hex2bin.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/hex2bin.js (tested in test/generated/php/strings/test-hex2bin.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Dima'
    var result = hex2bin('44696d61')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = '\x00'
    var result = hex2bin('00')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = false
    var result = hex2bin('2f1q')
    expect(result).to.deep.equal(expected)
    done()
  })
})