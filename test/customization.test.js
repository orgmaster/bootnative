'use strict';

const useBootnative = require('../src');
const useCustomVars = require('../src/core/useCustomVars');

const customVars = {
  spacing:10
}
const customColors = {
    primary:'red'
}

describe('customization', () => {
    it('custom', () => {
        const bn = useBootnative({vars:customVars,colors:customColors});
        expect(bn('mb-1')).toStrictEqual({marginBottom:1 * customVars.spacing});
        expect(bn('mb-1 mt-2')).toStrictEqual({marginBottom:1 * customVars.spacing, marginTop:2 * customVars.spacing});
        
        expect(bn('text-primary')).toStrictEqual({color:customColors.primary});
    });
});
