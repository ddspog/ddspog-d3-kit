// factories/chartFactory.js
var { RadarChart } = require('./charts');
var { CustomError } = require('../common');

class ChartFactory {
    constructor(d3) {
        this._d3 = d3;
    }

    createChart(type, options) {
        switch (type) {
            case 'RadarChart':
                return createRadarChart(this._d3, options);
            default:
                throw new CustomError({
                    name: 'WrongOption',
                    message: `${type} isn't a valid option.`
                });
        }
    }
}

function createRadarChart(d3, options) {
    var id = options.id, data = options.data;

    Object.keys(options)
        .filter(key => !['id', 'data'].includes(key))
        .reduce((obj, key) => {
            obj[key] = options[key];
            return obj;
        }, {});

    return RadarChart(d3, id, data, options);
}

exports.ChartFactory = ChartFactory;