import {_window, gridArray, grid} from './vars';

function styleParser(style:string, styles:{[key:string]:any}){
    let arr = style.split(' ');

    //grid case
    if(!!arr.find(item => item.split('-')[0] === 'col') === true){
        let cols = arr.filter(item => item.split('-')[0] === 'col');
        arr = arr.filter(item => item.split('-')[0] !== 'col');
        let scales:{[key:string]:any} = {}
        let grids = cols.map(item => {
            let split = item.split('-');
            let size = split.length === 3 ? split[2] : 'xs';
            scales = {...scales, [size]:split[1] }
            return {...grid[size],size};
        });
        grids.sort((a:any,b:any) => {
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
    let box:{[key:string]:any} = {};
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
                box[prop] = func();
            }
        }else{
            if(styles[prop] !== undefined){
                box[prop] = typeof styles[prop] === 'function' ? styles[prop]() : styles[prop];
            }
        }

    }
    let boxKeys = Object.keys(box);
    let result:object = {};
    for (let i = 0; i < boxKeys.length; i++) {
        result = {
            ...result,
            ...box[boxKeys[i]]
        };
    }

    return result;
}

export default styleParser;