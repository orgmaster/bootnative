'use strict';

const useBootnative = require('../src');

const customVars = {
  spacing:10
}

describe('Sizing', () => {
  it('Percentage', () => {
    const bn = useBootnative(customVars);
    expect(bn('w-15%')).toStrictEqual({width:'15%'});
    expect(bn('w-138.33%')).toStrictEqual({width:'138.33%'});
    expect(bn('h-15%')).toStrictEqual({height:'15%'});
    expect(bn('h-138.33%')).toStrictEqual({height:'138.33%'});
  });

  it('Literal', () => {
    const bn = useBootnative(customVars);
    expect(bn('w-15')).toStrictEqual({width:15});
    expect(bn('w-138.33')).toStrictEqual({width:138.33});
    expect(bn('h-15')).toStrictEqual({height:15});
    expect(bn('h-138.33')).toStrictEqual({height:138.33});
  });

  it('limits', () => {
    const bn = useBootnative(customVars);
    expect(bn('wMax-15')).toStrictEqual({maxWidth:15});
    expect(bn('wMin-33')).toStrictEqual({minWidth:33});
    expect(bn('hMax-15')).toStrictEqual({maxHeight:15});
    expect(bn('hMin-33')).toStrictEqual({minHeight:33});
  });
});
