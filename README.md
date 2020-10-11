# Bootnative

Aplique estilos  de forma sencilla en sus aplicaciones react-native.

Bootnative es muy amigable, ya que está basado en Bootstrap.

``` javascript

//Helpers

/*
Padding: p, pt, pb, pl, pr, py, px. (p-[integer]);
Margin: m, mt, mb, ml, mr, my, mx. (m-[integer]);
*/


//Ejemplo
import React from 'react';
import useBootnative from 'bootnative';

const Foo = () => {
  const bn = useBootnative();
  return (
    <View>
      <Text>text 1</Text>
      <Text style={bn('mb-7 ml-3 pr-3 pt-5')}>text 2</Text>
      <Text>text 3</Text>
    </View>
  )
}

```