// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ctype_cntrl = require('../../../../src/php/ctype/ctype_cntrl.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/ctype/ctype_cntrl.js (tested in test/generated/php/ctype/test-ctype_cntrl.js)', function () {
  it('should pass example 1', function (done) {
    var expected = false
    var result = ctype_cntrl('\u0020')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = true
    var result = ctype_cntrl('\u001F')
    expect(result).to.deep.equal(expected)
    done()
  })
})
