'use strict';

module.exports = function(_window = {width:1024, height:0}){
    const grid ={
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

    const gridArray =[
        {...grid.xs,size:'xs'},
        {...grid.sm,size:'sm'},
        {...grid.md,size:'md'},
        {...grid.lg,size:'lg'},
        {...grid.xl,size:'xl'}
    ];
    
    const container = {
        xs_width: _window.width,
        sm_width: 540,
        md_width: 720,
        lg_width: 960,
        xl_width: 1140,
    }

    const vars = {
        spacing:5,
        container_mt: 0
    }
    return {
        grid,
        gridArray,
        container,
        vars,
        _window
    }
}