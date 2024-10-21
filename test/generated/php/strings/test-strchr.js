// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strchr = require('../../../../src/php/strings/strchr.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/strchr.js (tested in test/generated/php/strings/test-strchr.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'van Zonneveld'
    var result = strchr('Kevin van Zonneveld', 'van')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'Kevin '
    var result = strchr('Kevin van Zonneveld', 'van', true)
    expect(result).to.deep.equal(expected)
    done()
  })
})
