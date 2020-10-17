'use strict';

const {colors} = require('./colors');

module.exports = function useCustomColors(customColors){
    return {
        ...colors,
        ...customColors
    }

}