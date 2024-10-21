// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var levenshtein = require('../../../../src/php/strings/levenshtein.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/levenshtein.js (tested in test/generated/php/strings/test-levenshtein.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 3
    var result = levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 2
    var result = levenshtein("carrrot", "carrots")
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 6
    var result = levenshtein("carrrot", "carrots", 2, 3, 4)
    expect(result).to.deep.equal(expected)
    done()
  })
})
