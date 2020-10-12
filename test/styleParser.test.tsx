//import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import useBootnative from '../src';
import vars from '../src/core/useCustomVars';

const customVars = {
  spacing:10
}
const {spacing} = vars({vars:customVars});

describe('styleParser', () => {
  it('return javascript object', () => {
    const bn = useBootnative(customVars);
    expect(bn('mb-1')).toStrictEqual({marginBottom:1 * spacing});
    expect(bn('mb-1 mt-2')).toStrictEqual({marginBottom:1 * spacing, marginTop:2 * spacing});
  });
});
