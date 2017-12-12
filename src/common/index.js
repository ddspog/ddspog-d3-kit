/**
 * @file Index of common package.
 * @author Dênnis Souza
 */
var errors = require('./errors');
var printers = require('./printers');

module.exports = {
    CustomError: errors.CustomError,
    stringify: printers.stringify
};