// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var crc32 = require('../../../../src/php/strings/crc32.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/crc32.js (tested in test/generated/php/strings/test-crc32.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 1249991249
    var result = crc32('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
})
