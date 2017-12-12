/**
 * @file Define functions for printing variables.
 * @author Dênnis Sousa
 */

 /**
  * Prints an Javascript object inline like a JSON.
  * @param {string} value - The object to print.
  * @returns {string} The object as a JSON string.
  */
function stringify(value) {
    var text = '';
    for (const key in value)
        text += `${key}: ${asString(value[key])}, `;
    return `{${text.slice(0, -2)}}`;
}

function asString(str) {
    if (typeof str === 'string') {
        return `'${str}'`;
    }
    return str;
}

exports.stringify = stringify;