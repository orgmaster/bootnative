import customVars from '../src/core/useCustomVars';
import vars from '../src/core/vars';

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
