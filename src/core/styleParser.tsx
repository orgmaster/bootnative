function styleParser(style:string, styles:{[key:string]:any}){
    const arr = style.split(' ');
    let result:{[key:string]:any} = {};

    for (let i = 0; i < arr.length; i++) {
        let custom = arr[i].split('-');

        if(custom.length > 1){ //is function
            let fun = custom[0];
            custom.shift();
            let func = styles[fun];
            if(Object.keys(styles).includes(fun)){
                while(custom.length){
                    console.log(func);
                    func = func.bind(null, custom.shift());
                    console.log(func);
                }
                result[fun] = func();
            }
        }

    }
    return result;
}

export default styleParser;