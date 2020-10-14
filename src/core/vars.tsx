//import { Dimensions } from 'react-native';


//const dimensions = Dimensions.get('window');
const dimensions:{[key:string]:any} = {width: 1024, heigt:0};

export const _window = dimensions;

export const grid: {[key:string]:any} ={
    xs:{
        min:0,
        max:575
    },
    sm:{
        min:576,
        max:767
    },
    md:{
        min:768,
        max:991
    },
    lg:{
        min:922,
        max:1199
    },
    xl:{
        min:1199,
        max:_window.width
    }
}

export const gridArray =[
    {...grid.xs,size:'xs'},
    {...grid.sm,size:'sm'},
    {...grid.md,size:'md'},
    {...grid.lg,size:'lg'},
    {...grid.xl,size:'xl'}
];

export const container:{[key:string]:any} = {
    xs_width: _window.width,
    sm_width: 540,
    md_width: 720,
    lg_width: 960,
    xl_width: 1140,
}



export default {
    spacing:5,
    container_mt: 0
}