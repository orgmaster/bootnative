//import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import useBootnative from '../src';

describe('it', () => {
  it('ceck my hook', () => {
    const bn = useBootnative();

    console.log(bn('bg-primary btn-primary-100'))
  });
});
