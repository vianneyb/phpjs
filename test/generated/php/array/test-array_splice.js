// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_splice = require('../../../../src/php/array/array_splice.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_splice.js (tested in test/generated/php/array/test-array_splice.js)', function () {
  it.skip('should pass example 1', function (done) {
    var expected = {4: "red", 'abc': "green"}
    var $input = {4: "red", 'abc': "green", 2: "blue", 'dud': "yellow"}
    var result = array_splice($input, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = []
    var $input = ["red", "green", "blue", "yellow"]
    var result = array_splice($input, 3, 0, "purple")
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = ["yellow"]
    var $input = ["red", "green", "blue", "yellow"]
    var result = array_splice($input, -1, 1, ["black", "maroon"])
    expect(result).to.deep.equal(expected)
    done()
  })
})
