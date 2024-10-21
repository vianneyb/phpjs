// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_slice = require('../../../../src/php/array/array_slice.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_slice.js (tested in test/generated/php/array/test-array_slice.js)', function () {
  it('should pass example 1', function (done) {
    var expected = [ 'c', 'd' ]
    var result = array_slice(["a", "b", "c", "d", "e"], 2, -1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = {2: 'c', 3: 'd'}
    var result = array_slice(["a", "b", "c", "d", "e"], 2, -1, true)
    expect(result).to.deep.equal(expected)
    done()
  })
})
