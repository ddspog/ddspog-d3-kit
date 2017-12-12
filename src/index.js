/**
 * @file Main index of project package.
 * @author Dênnis Souza
 */
var functions = require('./functions');
var elements = require('./elements');
var factories = require('./factories');
var common = require('./common');

module.exports = {
    range: functions.range,
    LayoutBox: elements.LayoutBox,
    RadarChartBuilder: factories.RadarChartBuilder,
    CustomError: common.CustomError,
    stringify: common.stringify
};