'use strict';

//import * as React from 'react';
//import * as ReactDOM from 'react-dom';
const useBootnative = require('../src');
const vars = require('../src/core/useCustomVars');

const customVars = {
  spacing:10
}
const {spacing} = vars({vars:customVars});

describe('styleParser', () => {
  it('return javascript object', () => {
    const bn = useBootnative(customVars);
    expect(bn('mb-1')).toStrictEqual({marginBottom:1 * spacing});
    expect(bn('mb-1 mt-2')).toStrictEqual({marginBottom:1 * spacing, marginTop:2 * spacing});
    expect(bn('functionProp mt-2')).toStrictEqual({test:'functionProps ok', marginTop:2 * spacing});
    expect(bn('objectProp mt-2')).toStrictEqual({test:'objectProps ok', marginTop:2 * spacing});
  });
});
