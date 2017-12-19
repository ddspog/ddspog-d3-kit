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

            [{
                params: ['RadarChart', {
                    id: 'chart',
                    data: [
                        [ // Series 1: iPhone
                            {
                                axis: "Battery Life",
                                value: 0.22
                            },
                            {
                                axis: "Brand",
                                value: 0.28
                            },
                            {
                                axis: "Contract Cost",
                                value: 0.29
                            },
                            {
                                axis: "Design And Quality",
                                value: 0.17
                            },
                            {
                                axis: "Have Internet Connectivity",
                                value: 0.22
                            },
                            {
                                axis: "Large Screen",
                                value: 0.02
                            },
                            {
                                axis: "Price Of Device",
                                value: 0.21
                            },
                            {
                                axis: "To Be A Smartphone",
                                value: 0.50
                            }
                        ],
                        [ // Series 2: Samsung
                            {
                                axis: "Battery Life",
                                value: 0.27
                            },
                            {
                                axis: "Brand",
                                value: 0.16
                            },
                            {
                                axis: "Contract Cost",
                                value: 0.35
                            },
                            {
                                axis: "Design And Quality",
                                value: 0.13
                            },
                            {
                                axis: "Have Internet Connectivity",
                                value: 0.20
                            },
                            {
                                axis: "Large Screen",
                                value: 0.13
                            },
                            {
                                axis: "Price Of Device",
                                value: 0.35
                            },
                            {
                                axis: "To Be A Smartphone",
                                value: 0.38
                            }
                        ],
                        [ // Series 3: Nokia Smartphone
                            {
                                axis: "Battery Life",
                                value: 0.26
                            },
                            {
                                axis: "Brand",
                                value: 0.10
                            },
                            {
                                axis: "Contract Cost",
                                value: 0.30
                            },
                            {
                                axis: "Design And Quality",
                                value: 0.14
                            },
                            {
                                axis: "Have Internet Connectivity",
                                value: 0.22
                            },
                            {
                                axis: "Large Screen",
                                value: 0.04
                            },
                            {
                                axis: "Price Of Device",
                                value: 0.41
                            },
                            {
                                axis: "To Be A Smartphone",
                                value: 0.30
                            }
                        ]
                    ]
                }],
                returns: [""]
            }].forEach((el) => {
                describe(`after calling fac.createChart(${el.params})`, () => {
                    it('should return no errors', () => {
                        var cleanup = require('jsdom-global')(`<div id="chart"></div>`);
    
                        var d3 = require("d3");
                        var fac = new ChartFactory(d3);

                        fac.createChart(...el.params);

                        cleanup();
                    });
                });
            });
        });
    });
});