/**
 * @file Define tests for stringify function.
 * @author Dênnis Sousa
 */

var { stringify } = require('../../src/index');
var should = require('chai').should();

describe('common', () => {
    describe('stringify()', () => {
        [{
            params: [{name: 'name01', num: 1}],
            return: `{name: 'name01', num: 1}`
        }, {
            params: [{ name: 'name02', num: 2 }],
            return: `{name: 'name02', num: 2}`
        }, {
            params: [{ name: 'name03', num: 3 }],
            return: `{name: 'name03', num: 3}`
        }].forEach((el) => {
            it(`stringify(${stringify(el.params[0])}) should return '${el.return}'`, () => {
                stringify(...el.params).should.be.equal(el.return);
            });
        });
    });
});