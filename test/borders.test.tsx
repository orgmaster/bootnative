import useBootnative from '../src';

describe('borders', () => {
    it('border', () => {
        const bn = useBootnative();
        expect(bn('border-0')).toStrictEqual({ border: "none" });
        expect(bn('border-1')).toStrictEqual({ border: "1px solid black" });
        expect(bn('border-2-red-dashed')).toStrictEqual({ border: "2px dashed red" });
    });
    it('borderTop', () => {
        const bn = useBootnative();
        expect(bn('borderTop-5-red')).toStrictEqual({ borderTop: "5px solid red" });
        expect(bn('borderTop-4-grey-dashed')).toStrictEqual({ borderTop: "4px dashed grey" });
    });
    it('borderRight', () => {
        const bn = useBootnative();
        expect(bn('borderRight-1')).toStrictEqual({ borderRight: "1px solid black" });
        expect(bn('borderRight-2-red-dashed')).toStrictEqual({ borderRight: "2px dashed red" });
    });
    it('borderBottom', () => {
        const bn = useBootnative();
        expect(bn('borderBottom-1')).toStrictEqual({ borderBottom: "1px solid black" });
        expect(bn('borderBottom-2-red-dashed')).toStrictEqual({ borderBottom: "2px dashed red" });
    });
    it('borderLeft', () => {
        const bn = useBootnative();
        expect(bn('borderLeft-1')).toStrictEqual({ borderLeft: "1px solid black" });
        expect(bn('borderLeft-2-red-dashed')).toStrictEqual({ borderLeft: "2px dashed red" });
    });
    it('borderY', () => {
        const bn = useBootnative();
        expect(bn('borderY-1')).toStrictEqual({ borderTop: "1px solid black", borderBottom: "1px solid black" });
        expect(bn('borderY-2-red-dashed')).toStrictEqual({ borderTop: "2px dashed red", borderBottom: "2px dashed red" });
    });
    it('borderX', () => {
        const bn = useBootnative();
        expect(bn('borderX-1')).toStrictEqual({ borderRight: "1px solid black", borderLeft: "1px solid black" });
        expect(bn('borderX-2-red-dashed')).toStrictEqual({ borderRight: "2px dashed red", borderLeft: "2px dashed red" });
    });
});