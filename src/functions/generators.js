// functions/generators.js

function range_number(start, edge, step) {
    // Create the array of numbers, stopping before the edge.
    for (var ret = []; (edge - start) * step > 0; start += step) {
        ret.push(start);
    }
    return ret;
}

function range_char(start, edge, step) {
    var startN = start.charCodeAt(0);
    var edgeN = edge.charCodeAt(0);
    var rangeArr = range_number(startN, edgeN, step);
    var ret = [];
    for (var i = 0; i < rangeArr.length; i++) {
        ret.push(String.fromCharCode(rangeArr[i]));
    }
    return ret;
}
/**
 * Creates a range of numbers or chars in an array, starting at a specified value and
 * ending before a different specified value.
 * @param {any=} start  Indicates what value should be used as the first
 *     value in the returned array.
 * @param {any=} edge  Indicates the first value that should not appear in
 *     the range of value.
 * @param {number=} step  Indicates the difference between one value and the
 *     subsequent value placed in the returned array. If not specified this
 *     defaults to 1.
 * @return {!Array.<any>}  Array of values in the specified range.
 */
function range(start, edge, step) {
    // Set step default value.
    step = step || 1;
    if (typeof start === 'number' && typeof edge === 'number') {
        return range_number(start, edge, step);
    }
    else if (typeof start === 'string' && typeof edge === 'string') {
        return range_char(start, edge, step);
    }
    else {
        var ret = [];
        return ret;
    }
}

exports.range = range;
