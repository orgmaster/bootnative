'use strict';

const legacy = require('./vars');

module.exports = function useCustomVars(customVars,dimensions = {width:1024, height:0}) {
    const {vars} = legacy(dimensions);
    return {
        ...vars,
        ...customVars
    }

}