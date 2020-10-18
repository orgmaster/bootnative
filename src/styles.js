'use strict';

const utilities = require('./utilities');
const layout = require('./layout');

module.exports = function(dimensions, custom){

    const styles = {
        ...utilities(custom),
        ...layout(dimensions, custom.vars),
        objectProp:{
            test:'objectProps ok'
        },
        functionProp:()=>{
            return {
                test:'functionProps ok'
            }
        }
    }
    
    return styles;
};