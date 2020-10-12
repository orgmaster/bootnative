import customColors from '../src/core/useCustomColors';
import colors from '../src/core/colors';

let cColors = customColors({});

describe('styleParser', () => {
  it('return original colors', () => {
    expect(cColors.red).toEqual(colors.red);
  });

  it('return custom colors', () => {
    cColors = customColors({red: '#fff'});
    expect(cColors.red).not.toEqual(colors.red);
    cColors = customColors({red: '#fff'});
    expect(cColors.red).toEqual('#fff');
  });
  
});
