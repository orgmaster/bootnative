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

``` javascript

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

Headers: h1, h2, h3, h4, h5, h6
Fonts: s, u, em, bold, mark-[color]

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


/*

width-[string||float], maxWidth-[integer], minWidth-[integer]

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

border-[width]-[color]-[style]-[radius]
borderSize-[width]
borderColor-[color]
borderRadius-[radius]
borderStyle-[style]

*/
const Borders = () => {
  const bn = useBootnative();
  return (
    <View>
      <View style={bn('border-5-red-dotted-3')}>
        <Text>
            {/*
                Width 5, red, dotted, radius 3
            */}
        <Text>
      </View>
      <View style={bn('border borderColor-blue-top')}>
        <Text>
            {/*
                Right, bottom, left: Width 1, black, solid
                Top: Width 1, blue, solid
            */}
        <Text>
      </View>
      <View style={bn('border-3-green borderRadius-5-top borderRadius-10-bottom-right')}>
        <Text>
            {/*
                Border: Width 3, green, solid
                TopLeftRadius & TopRightRadius: 5
                BottomRightRadius: 10
            */}
        <Text>
      </View>
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
    //example
    danger: "red",
  },
});
```
