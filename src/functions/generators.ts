/**
 * Creates a range of numbers in an array, starting at a specified number and
 * ending before a different specified number.
 * @param {number} start  Indicates what number should be used as the first
 *     number in the returned array.  If this is the only number argument
 *     supplied, this will be used as the edge and 0 will be used as the start.
 * @param {number=} edge  Indicates the first number that should not appear in
 *     the range of numbers.  If this number preceeds the start in the range
 *     (taking into account the step), an empty array will be returned.  If not
 *     specified and not inferred this defaults to 0.
 * @param {number=} step  Indicates the difference between one number and the
 *     subsequent number placed in the returned array.  If not specified this
 *     defaults to 1.
 * @return {!Array.<number>}  Array of numbers in the specified range.
 */
function range_number(start: number, edge: number, step: number): Array<number> {
    // Create the array of numbers, stopping before the edge.
    for (var ret = [];
        (edge - start) * step > 0; start += step) {
        ret.push(start);
    }

    return ret;
}

/**
 * Creates a range of chars in an array, starting at a specified char and
 * ending before a different specified char.
 * @param {string} start  Indicates what char should be used as the first
 *     char in the returned array.
 * @param {string=} edge  Indicates the first char that should not appear in
 *     the range of chars. If this char preceeds the start in the range
 *     (taking into account the step), an empty array will be returned.
 * @param {number=} step  Indicates the difference between one char and the
 *     subsequent char placed in the returned array. If not specified this
 *     defaults to 1.
 * @return {!Array.<char>} Array of chars in the specified range.
 */
function range_char(start: string, edge: string, step: number): Array<string> {
    var startN = start.charCodeAt(0);
    var edgeN = edge.charCodeAt(0);

    var rangeArr = range_number(startN, edgeN, step);

    var ret: Array<string> = [];

    for(var i = 0; i < rangeArr.length; i++) {
        ret.push(String.fromCharCode(rangeArr[i]));
    }

    return ret;
}

export function range(start: number, edge?: number, step?: number): Array<number>;
export function range(start: string, edge?: string, step?: number): Array<string>;

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
export function range(start: any, edge: any, step?: number): Array<any> {
    // Set step default value.
    step = step || 1;

    if (typeof start === 'number' && typeof edge === 'number') {
        return range_number(start, edge, step);
    } else if (typeof start === 'string' && typeof edge === 'string') {
        return range_char(start, edge, step);
    } else {
        var ret: Array<any> = [];
        return ret;
    }
}