function styleParser(style:string, styles:{[key:string]:any}){
    const arr = style.split(' ');
    let box:{[key:string]:any} = {};
    let result:object = {};
    for (let i = 0; i < arr.length; i++) {
        let custom = arr[i].split('-');

        if(custom.length > 1){ //is function
            let fun = custom[0];
            custom.shift();
            let func = styles[fun];
            if(Object.keys(styles).includes(fun)){
                while(custom.length){
                    func = func.bind(null, custom.shift());
                }
                box[fun] = func();
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