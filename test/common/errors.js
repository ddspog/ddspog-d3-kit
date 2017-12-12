/**
 * @file Define tests for CustomError.
 * @author Dênnis Sousa
 */

var util = require('util');
var { CustomError, stringify } = require('../../src/index');
var should = require('chai').should();

describe('common', () => {
    describe('class CustomError()', () => {
        [{
            params: [{name: 'TestError01', message: 'message01', status: 01}],
            returns: ["TestError01", 1, "message01"]
        }, {
            params: [{ name: 'TestError02', message: 'message02', status: 02 }],
            returns: ["TestError02", 2, "message02"]
        }, {
            params: [{message: 'message03'}],
                returns: ["CustomError", 0, "message03"]
        }].forEach((el) => {
            describe(`catching CustomError(${stringify(el.params[0])}) as err`, () => {
                try {
                    throw new CustomError(...el.params);
                } catch (err) {
                    it('err shoud be instance of CustomError', () => {
                        err.should.be.an.instanceof(CustomError);
                    });
                    it('err shoud be instance of Error', () => {
                        err.should.be.an.instanceof(Error);
                    });
                    it('err should have recorded a stack', () => {
                        /* jshint -W030 */
                        err.stack.should.exist;
                    });
                    it('err should be recognized by node', () => {
                        /* jshint -W030 */
                        util.isError(err).should.be.true;
                    });

                    it(`err.name should be '${el.returns[0]}'`, () => {
                        err.name.should.equal(el.returns[0]);
                    });
                    it(`err.status should be ${el.returns[1]}`, () => {
                        err.status.should.equal(el.returns[1]);
                    });
                    it(`err.message should return '${el.returns[2]}'`, () => {
                        err.message.should.equal(el.returns[2]);
                    });
                }
            });
        });

        [{
            params: [{name: 'TestError01', status: 01}]
        }, {
            params: [{}],
        }].forEach((el) => {
            describe(`catching wrong CustomError(${stringify(el.params[0])}) as err`, () => {
                try {
                    throw new CustomError(...el.params);
                } catch (err) {
                    it('err shoud be instance of CustomError', () => {
                        err.should.be.an.instanceof(CustomError);
                    });
                    it('err shoud be instance of Error', () => {
                        err.should.be.an.instanceof(Error);
                    });
                    it('err should have recorded a stack', () => {
                        /* jshint -W030 */
                        err.stack.should.exist;
                    });
                    it('err should be recognized by node', () => {
                        /* jshint -W030 */
                        util.isError(err).should.be.true;
                    });

                    it(`err.name should be 'MissingParameter'`, () => {
                        err.name.should.equal('MissingParameter');
                    });
                    it(`err.status should be 0`, () => {
                        err.status.should.equal(0);
                    });
                    it(`err.message should return 'Missing config.message parameter on CustomError().'`, () => {
                        err.message.should.equal('Missing config.message parameter on CustomError().');
                    });
                }
            });
        });
    });
});