// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var stripslashes = require('../../../../src/php/strings/stripslashes.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/stripslashes.js (tested in test/generated/php/strings/test-stripslashes.js)', function () {
  it('should pass example 1', function (done) {
    var expected = "Kevin's code"
    var result = stripslashes('Kevin\'s code')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = "Kevin\'s code"
    var result = stripslashes('Kevin\\\'s code')
    expect(result).to.deep.equal(expected)
    done()
  })
})
