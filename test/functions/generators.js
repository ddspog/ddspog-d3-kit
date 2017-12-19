/**
 * @file Define tests for generators on project.
 * @author Dênnis Sousa
 */

var { range } = require('../../src/index');
var should = require('chai').should();

describe('functions', () => {
    describe('range() for numbers', () => {
        [{
            params: [0, 1],
            return: [0]
        }, {
            params: [0, 2],
            return: [0, 1]
        }, {
            params: [0, 3],
            return: [0, 1, 2]
        }, {
            params: [0, 4, 2],
            return: [0, 2]
        }, {
            params: [0, 5, 2],
            return: [0, 2, 4]
        }, {
            params: [1, 13, 3],
            return: [1, 4, 7, 10]
        }, {
            params: [3, 23, 4],
            return: [3, 7, 11, 15, 19]
        }].forEach((el) => {
            it(`range(${el.params}) should return [${el.return}]`, () => {
                range(...el.params).should.deep.equal(el.return);
            });
        });
    });

    describe('range() for letters', () => {
        [{
            params: ['0', '1'],
            return: ['0']
        }, {
            params: ['2', 'G', 5],
            return: ['2', '7', '<', 'A', 'F']
        }, {
            params: ['a', 'd'],
            return: ['a', 'b', 'c']
        }, {
            params: ['A', 'E'],
            return: ['A', 'B', 'C', 'D']
        }, {
            params: ['Q', 'p', 8],
            return: ['Q', 'Y', 'a', 'i']
        }].forEach((el) => {
            it(`range(${el.params}) should return [${el.return}]`, () => {
                range(...el.params).should.deep.equal(el.return);
            });
        });
    });
});