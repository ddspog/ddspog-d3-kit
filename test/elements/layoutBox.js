/**
 * @file Define tests for LayoutBox.
 * @author Dênnis Sousa
 */

var { LayoutBox } = require('../../src/index');
var should = require('chai').should();

describe('elements', () => {
    describe('class LayoutBox()', () => {
        [{
            params: ["10 20 10 20"],
            returns: ["10 20 10 20", "10", "20", "10", "20"]
        }, {
            params: ["150 20 10 220"],
            returns: ["150 20 10 220", "150", "20", "10", "220"]
        }].forEach((el) => {
            describe(`with LayoutBox(${el.params}) as box`, () => {
                var box = new LayoutBox(...el.params);

                it(`box.toString() should return ${el.returns[0]}`, () => {
                    box.toString().should.equal(el.returns[0]);
                });
                it(`box.minX should return ${el.returns[1]}`, () => {
                    box.minX.should.equal(el.returns[1]);
                });
                it(`box.top should return ${el.returns[1]}`, () => {
                    box.top.should.equal(el.returns[1]);
                });
                it(`box.minY should return ${el.returns[2]}`, () => {
                    box.minY.should.equal(el.returns[2]);
                });
                it(`box.right should return ${el.returns[2]}`, () => {
                    box.right.should.equal(el.returns[2]);
                });
                it(`box.width should return ${el.returns[3]}`, () => {
                    box.width.should.equal(el.returns[3]);
                });
                it(`box.bottom should return ${el.returns[3]}`, () => {
                    box.bottom.should.equal(el.returns[3]);
                });
                it(`box.height should return ${el.returns[4]}`, () => {
                    box.height.should.equal(el.returns[4]);
                });
                it(`box.left should return ${el.returns[4]}`, () => {
                    box.left.should.equal(el.returns[4]);
                });
            });
        });
    });
});