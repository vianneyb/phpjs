// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var sha1 = require('../../../../src/php/strings/sha1.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/sha1.js (tested in test/generated/php/strings/test-sha1.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'
    var result = sha1('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
})
