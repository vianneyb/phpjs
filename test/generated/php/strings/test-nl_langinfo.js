// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var nl_langinfo = require('../../../../src/php/strings/nl_langinfo.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/nl_langinfo.js (tested in test/generated/php/strings/test-nl_langinfo.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Sunday'
    var result = nl_langinfo('DAY_1')
    expect(result).to.deep.equal(expected)
    done()
  })
})
