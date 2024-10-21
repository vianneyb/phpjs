// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var print_r = require('../../../../src/php/var/print_r.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/print_r.js (tested in test/generated/php/var/test-print_r.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '1'
    var result = print_r(1, true)
    expect(result).to.deep.equal(expected)
    done()
  })
})
