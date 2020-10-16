<h1 align="center">Bootnative</h1>

<!-- <p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p> -->

<p align="center">
  <a href="https://npmcharts.com/compare/bootnative?minimal=true"><img src="https://img.shields.io/npm/dm/bootnative.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/bootnative"><img src="https://img.shields.io/npm/v/bootnative.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/bootnative"><img src="https://img.shields.io/npm/l/bootnative.svg?sanitize=true" alt="License"></a>
</p>
<hr/>

<p>Easily apply styles in your react-native apps.</p>

<p>
<small>Bootnative is very friendly as it is based on Bootstrap.</small>
</p>

<ul>
  <li><a href="#documentation">Documentation</a></li>
  <li><a href="#customization">Customization</a></li>
</ul>

<h2 id="documentation">Documentation</h2>

```javascript

import React from 'react';
import {View, Text} from 'react-native';
import useBootnative from 'bootnative';

//Usage

/*
############# grid system ############

container: container, container-sm, container-md, container-lg, container-fluid

row

cols (1~12): col-[scale]-[size = xs] --> col-6-sm, col-4-xl
col-6, col-3-lg

*/

const Grid = () => {
  const bn = useBootnative();
  return (
    <View styles={bn('container-md')}>
      <View style={bn('row')}>
        <View style={bn('col-6-sm col-4-md col-3-lg col-xl-2')}>
          <Text>text 1</Text>
        </View>
        <View style={bn('col-6-sm col-4-md col-3-lg col-xl-2')}>
          <Text>text 2</Text>
        </View>
        <View style={bn('col-6-sm col-4-md col-3-lg col-xl-2')}>
          <Text>text 3</Text>
        </View>
      </View>
    </View>
  )
}


/*
############# utilities ##############

Padding: p, pt, pb, pl, pr, py, px. (p-[scale]);

Margin: m, mt, mb, ml, mr, my, mx. (m-[scale]);
*/

const Spacing = () => {
  const bn = useBootnative();
  return (
    <View>
      <Text>text 1</Text>
      <Text style={bn('m-2 mb-7 ml-3 pr-3 pt-5')}>text 2</Text>
      <Text>text 3</Text>
    </View>
  )
}


/*

width-[string||float], maxWidth-[float], minWidth-[float]

*/
const Sizing = () => {
  const bn = useBootnative();
  return (
    <View>
      <View style={bn('width-200')}>
        {/* 200px */}
      </View>
      <View style={bn('width-50%')}>
        {/* 50% of its parent component */}
      </View>
      <View style={bn('width-100% maxWidth-500')}>
        {/* 100%, max 500px */}
      </View>
      <View style={bn('width-30% minWidth-50')}>
        {/* 30%, min 50px */}
      </View>
    </View>
  )
}

/*

border-[size:float = 1]-[color=black]-[style=solid]-[radius:float=0.0001]
///WARNING: On android need a radius for change border style (react-native bug)///

borderLeft-[size:integer]-[color:string]
borderRight-[size:integer]-[color:string]
borderTop-[size:integer]-[color:string]
borderBottom-[size:integer]-[color:string]
borderX-[size:integer]-[color:string]
borderY-[size:integer]-[color:string]

borderStyle-[string]

borderRadius-[integer]-[position1]-[position2] //posible positions: left,right,top,bottom
//if you provide position2, the border radius will go apply on corner.

borderSize-[float]-[position:string] //posible positions: left,right,top,bottom
borderColor-[string]-[position:string] //posible positions: left,right,top,bottom
*/

const Borders = () => {
  const bn = useBootnative();
  return (
    <View>
      <View style={bn('border-1-red-solid-5')}></View>
      <View style={bn('borderRadius-30 borderStyle-dashed borderColor-#000')}></View>
      <View style={bn('borderColor-red borderColor-pink-bottom')}></View>
      <View style={bn('borderRadius-5-top-left borderRadius-20-bottom')}></View>
    </View>
  )
}



const Colors = () => {
  const bn = useBootnative();
  return (
    <View>
      <View style={bn('border-1-red-solid-5')}></View>
      <View style={bn('borderRadius-30 borderStyle-dashed borderColor-#000')}></View>
      <View style={bn('borderColor-red borderColor-pink-bottom')}></View>
      <View style={bn('borderRadius-5-top-left borderRadius-20-bottom')}></View>
    </View>
  )
}

/*
########### Typography ##########

text-[position]
text-[color]
bg-[color]

*/

const Text = () => {
  const bn = useBootnative();
  return (
      <View style={bn('bg-yellow')}>
        <Text style={bn('text-center' 'text-red')}>
            {/*
                text centered, color red, background color yellow
            */}
        <Text>
      </View>
  )
}

/*

h1
h2
h3
h4
h5
h6
s
u
em
bold
mark-[color]

*/

const Typography = () => {
  const bn = useBootnative();
  return (
      <View>
        <Text style={bn('h3' 'mark')}>
            {/*
                h3, marked yellow
            */}
        <Text>
        <Text style={bn('em' 'u')}>
            {/*
                italic style, underlined
            */}
        <Text>
        <Text style={bn('bold' 's' 'mark-blue')}>
            {/*
                weight bold, line through, marked blue
            */}
        <Text>
      </View>
  )
}
```

<h2 id="customization">Customization</h2>

```javascript
const bn = useBootnative({
  vars: {
    //Change default values
    spacing: 5, //margins & pading (scale prop)
    container_mt: 0, //util for toolkit
  },
  colors: {
    //default
    primary: "#057AFC",
    secondary: "#6C757D",
    success: "#51A846",
    danger: "#DD4145",
    waring: "#FBC230",
    info: "#3DA3B9",
    light: "#F8F9FA",
    dark: "#343A40",
    white: "#ffffff",

    blue: "#057AFC",
    indigo: "#7066F2",
    purple: "#7152C1",
    pink: "#E9548C",
    red: "#DD4145",
    orange: "#F37D30",
    yellow: "#FBC230",
    green: "#51A846",
    teal: "#5CCA98",
    cyan: "#3DA3B9",
  },
});
```
