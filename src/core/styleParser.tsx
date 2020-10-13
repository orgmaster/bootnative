function styleParser(style:string, styles:{[key:string]:any}){
    const arr = style.split(' ');
    let box:{[key:string]:any} = {};
    let result:object = {};
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

    for (let i = 0; i < boxKeys.length; i++) {
        result = {
            ...result,
            ...box[boxKeys[i]]
        };
    }

    return result;
}

export default styleParser;