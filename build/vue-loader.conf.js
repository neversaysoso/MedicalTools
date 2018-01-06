/**
 * Created by sangfeng on 2017/12/5.
 */
var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  /**
   * important! should use postTransformNode to add $processStyle for
   * inline style normalization.
   */
  compilerModules: [
    {
      postTransformNode: el => {
        el.staticStyle = `$processStyle(${el.staticStyle})`
        el.styleBinding = `$processStyle(${el.styleBinding})`
      }
    }
  ]
}
