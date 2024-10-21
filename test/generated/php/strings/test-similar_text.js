// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var similar_text = require('../../../../src/php/strings/similar_text.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/similar_text.js (tested in test/generated/php/strings/test-similar_text.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 8
    var result = similar_text('Hello World!', 'Hello locutus!')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 0
    var result = similar_text('Hello World!', null)
    expect(result).to.deep.equal(expected)
    done()
  })
})
