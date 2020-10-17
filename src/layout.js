'use strict';

const useCustomVars = require('./core/useCustomVars');
const vars = require('./core/vars');

// function validateScale(scale){
//     if(scale != 'auto' && parseInt(scale) < 1) throw new Error('The min scale is: 1');
// }


module.exports = function(dimensions, customVars){
    const {_window, container,gridArray, grid} = vars(dimensions);
    
    const {container_mt} = useCustomVars(customVars);

    return {

        /*

            Container

        */

        container:(size = 'sm') => {
            let deviceSize = gridArray.find(item => item.min <= _window.width && item.max >= _window.width);
            let containerSize = grid[size];
            let width = _window.width;
            if(size !== 'fluid'){
                if(deviceSize.min >= containerSize.min){
                        width = container[deviceSize.size+'_width'];
                    }
            }
            let props = {
                marginTop: container_mt,
                flex: 1,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
            if(width <= _window.width) props.width = width;
            return props;
        },

        /*

            Grid

        */

        row:{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            flexWrap:'wrap'
        },

        col:(scale) => {
            return {
                width: ((100/12)*parseInt(scale))+'%'
            }
        },
    }
};