/**
 * @file Configurate custom errors for the project.
 * @author Dênnis Souza
 */

/**
 * Creates a custom error and returns it.
 * @param {Object} config - The error configuration.
 * @param {string=} [config.name] - The name of error.
 * @param {string=} [config.status] - Helper status for debugging.
 * @param {string} config.message - The message of error.
 * @returns {Error} Custom error object.
 * @constructor
 */
function CustomError(config) {
    Error.captureStackTrace(this, this.constructor);

    this.name = config.name || 'CustomError';
    this.status = config.status || 0;
    
    // Nice recursion :)
    if (!config.message) {
        throw new CustomError({
            name: 'MissingParameter',
            message: 'Missing config.message parameter on CustomError().'
        });
    }

    this.message = config.message;
}

exports.CustomError = CustomError;

require('util').inherits(exports.CustomError, Error);