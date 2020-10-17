'use strict';

const useBootnative = require('../src');

describe('borders', () => {
    it('border', () => {
        const bn = useBootnative();
        expect(bn('border-3')).toStrictEqual({ borderWidth: 3, borderColor: "black", borderStyle: "solid", borderRadius: 0.0001 });
        expect(bn('border-2-red-dashed-5')).toStrictEqual({ borderWidth: 2, borderColor: "#DD4145", borderStyle: "dashed", borderRadius: 5 });
        expect(bn('border-2-black-dashed-5')).toStrictEqual({ borderWidth: 2, borderColor: "black", borderStyle: "dashed", borderRadius: 5 });
    });
    it('borderTop', () => {
        const bn = useBootnative();
        expect(bn('borderTop-5-red')).toStrictEqual({ borderTopWidth: 5, borderTopColor: "#DD4145" });
        expect(bn('borderTop-5-black')).toStrictEqual({ borderTopWidth: 5, borderTopColor: "black" });
        expect(bn('borderTop-4')).toStrictEqual({ borderTopWidth: 4, borderTopColor: "black" });
    });
    it('borderRight', () => {
        const bn = useBootnative();
        expect(bn('borderRight-1')).toStrictEqual({ borderRightWidth: 1, borderRightColor: "black" });
        expect(bn('borderRight-2-red')).toStrictEqual({ borderRightWidth: 2, borderRightColor: "#DD4145" });
        expect(bn('borderRight-2-black')).toStrictEqual({ borderRightWidth: 2, borderRightColor: "black" });
    });
    it('borderBottom', () => {
        const bn = useBootnative();
        expect(bn('borderBottom-5-red')).toStrictEqual({ borderBottomWidth: 5, borderBottomColor: "#DD4145" });
        expect(bn('borderBottom-5-black')).toStrictEqual({ borderBottomWidth: 5, borderBottomColor: "black" });
        expect(bn('borderBottom-4')).toStrictEqual({ borderBottomWidth: 4, borderBottomColor: "black" });
    });
    it('borderLeft', () => {
        const bn = useBootnative();
        expect(bn('borderLeft-1')).toStrictEqual({ borderLeftWidth: 1, borderLeftColor: "black" });
        expect(bn('borderLeft-2-red')).toStrictEqual({ borderLeftWidth: 2, borderLeftColor: "#DD4145" });
        expect(bn('borderLeft-2-black')).toStrictEqual({ borderLeftWidth: 2, borderLeftColor: "black" });
    });
    it('borderY', () => {
        const bn = useBootnative();
        expect(bn('borderY-5-red')).toStrictEqual({ borderTopWidth: 5, borderTopColor: "#DD4145", borderBottomWidth: 5, borderBottomColor: "#DD4145" });
        expect(bn('borderY-5-black')).toStrictEqual({ borderTopWidth: 5, borderTopColor: "black", borderBottomWidth: 5, borderBottomColor: "black" });
        expect(bn('borderY-4')).toStrictEqual({ borderTopWidth: 4, borderTopColor: "black", borderBottomWidth: 4, borderBottomColor: "black" });
    });
    it('borderX', () => {
        const bn = useBootnative();
        expect(bn('borderX-1')).toStrictEqual({ borderRightWidth: 1, borderRightColor: "black", borderLeftWidth: 1, borderLeftColor: "black" });
        expect(bn('borderX-2-red')).toStrictEqual({ borderRightWidth: 2, borderRightColor: "#DD4145", borderLeftWidth: 2, borderLeftColor: "#DD4145" });
        expect(bn('borderX-2-black')).toStrictEqual({ borderRightWidth: 2, borderRightColor: "black", borderLeftWidth: 2, borderLeftColor: "black" });

    });
});