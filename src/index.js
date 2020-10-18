'use strict';
const styleParser = require('./core/styleParser');
const styles = require('./styles');


module.exports = function useBootnative (custom) {
    const {vars, colors} = custom;
    return function(style){
        //const { Dimensions } = require('react-native');
        //const dimensions = Dimensions.get('window');
        const dimensions = {width:1024, height:0};
    return styleParser(style, styles(dimensions,{vars:vars||{},colors:colors||{}}), dimensions)
  };
}