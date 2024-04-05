// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_integer = require('../../../../src/php/var/is_integer.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/is_integer.js (tested in test/generated/php/var/test-is_integer.js)', function () {
  it('should pass example 1', function (done) {
    var expected = false
    var result = is_integer(186.31)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = true
    var result = is_integer(12)
    expect(result).to.deep.equal(expected)
    done()
  })
})