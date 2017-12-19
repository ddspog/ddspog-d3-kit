/**
 * @file Define tests for ChartFactory.
 * @author Dênnis Sousa
 */

var {
    ChartFactory
} = require('../../src/index');
var should = require('chai').should();

describe('factories', () => {
    describe('class ChartFactory()', () => {
        describe('with ChartFactory(d3) as fac', () => {

            [{
                params: ['BarChart', {
                    id: 'chart',
                    data: []
                }],
                returns: [""]
            }].forEach((el) => {
                describe(`after calling fac.createChart(${el.params})`, () => {
                    var d3 = require('d3');
                    var fac = new ChartFactory(d3);

                    it('should throw WrongOption error', () => {
                        try {
                            fac.createChart(...el.params);
                        } catch (err) {
                            err.name.should.be.equal('WrongOption');
                        }
                    });
                });
            });

            // [{
            //     params: ['RadarChart', {
            //         id: 'chart',
            //         data: []
            //     }],
            //     returns: []
            // }].forEach((el) => {
            //     describe(`after calling fac.createChart(${el.params})`, () => {
            //         var cleanup = require('jsdom-global')();

            //         var d3 = require("d3");
            //         var fac = new ChartFactory(d3);

            //         fac.createChart(...el.params);

            //         it('should ', () => {

            //         });

            //         cleanup();
            //     });
            // });
        });
    });
});