'use strict';

const useBootnative = require('../src');

const customVars = {
  spacing:10
}

describe('Sizing', () => {
  it('Percentage', () => {
    const bn = useBootnative(customVars);
    expect(bn('width-15%')).toStrictEqual({width:'15%'});
    expect(bn('width-138.33%')).toStrictEqual({width:'138.33%'});
  });

  it('Literal', () => {
    const bn = useBootnative(customVars);
    expect(bn('width-15')).toStrictEqual({width:15});
    expect(bn('width-138.33')).toStrictEqual({width:138.33});
  });

  it('limits', () => {
    const bn = useBootnative(customVars);
    expect(bn('maxWidth-15')).toStrictEqual({maxWidth:15});
    expect(bn('minWidth-33')).toStrictEqual({minWidth:33});
  });
});
