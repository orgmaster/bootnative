'use strict';
const legacy = require('./vars');

function styleParser(style, styles, dimensions){
    const {_window, gridArray, grid} = legacy(dimensions);
    let arr = style.split(' ');

    //grid case
    if(!!arr.find(item => item.split('-')[0] === 'col') === true){
        let cols = arr.filter(item => item.split('-')[0] === 'col');
        arr = arr.filter(item => item.split('-')[0] !== 'col');
        let scales = {}
        let grids = cols.map(item => {
            let split = item.split('-');
            let size = split.length === 3 ? split[2] : 'xs';
            scales = {...scales, [size]:split[1] }
            return {...grid[size],size};
        });
        grids.sort((a,b) => {
            return a.min - b.min;
        });
        let sizes = grids.map(item => {
            return item.size;
        });
        let device = gridArray.find(item => _window.width >= item.min && _window.width <= item.max);
        let col = 'col-12';
        while (sizes.length) {
            let size = sizes[0];
            sizes.shift();
            let highest = grid[size];
            if(highest!== undefined && device.min >= highest.min)
                col = 'col-'+scales[size];
        }
        arr.push(col);
    }

    //legacy
    let box = {};
    for (let i = 0; i < arr.length; i++) {
        let custom = arr[i].split('-');
        let prop = custom[0];

        if(custom.length > 1){ //has props and is a function
            custom.shift();
            let func = styles[prop];
            if(styles[prop] !== undefined){
                while(custom.length){
                    func = func.bind(null, custom.shift());
                }
                box = {...box,...func()}
            }
        }else{
            if(styles[prop] !== undefined){
                box= {...box,...typeof styles[prop] === 'function' ? styles[prop]() : styles[prop]}
            }
        }

    }
    
    return box;
}

module.exports = styleParser;