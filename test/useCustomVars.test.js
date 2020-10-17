'use strict';

const customVars = require('../src/core/useCustomVars');
const legacy = require('../src/core/vars');

const {vars} = legacy();

let cVars = customVars({});

describe('styleParser', () => {
  it('return original vars', () => {
    expect(cVars.spacing).toEqual(vars.spacing);
  });

  it('return custom vars', () => {
    cVars = customVars({spacing: 10});
    expect(cVars.spacing).not.toEqual(vars.spacing);
    cVars = customVars({spacing: 7});
    expect(cVars.spacing).toEqual(7);
  });
  
});
