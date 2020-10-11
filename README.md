# Bootnative

Aplique estilos  de forma sencilla en sus aplicaciones react-native.

Bootnative es muy amigable, ya que está basado en Bootstrap.

``` javascript

//example

import React from 'react';
import useBootnative from 'bootnative';

const Foo = () => {
  const bt = useBootnative();
  return (
    <View style={bt('container')}>
      <View style={bt('row')}>
        <View style={bt('col-12')}>

          <TouchableOpacity style={bn('btn-primary')}>
           <Text style={'text'}>Get started</Text>
          </TouchableOpacity>

          <TouchableOpacity style={bn('btn-#fff')}>
           <Text style={bn('text-dark')}>View doc</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

```