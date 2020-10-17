import useBootnative from '../src';

describe('colors', () => {
    it('bg', () => {
        const bn = useBootnative();
        expect(bn('bg-red')).toStrictEqual({ backgroundColor: "#DD4145" });
        expect(bn('bg-primary')).toStrictEqual({ backgroundColor: "#057AFC" });
        expect(bn('bg-#fff')).toStrictEqual({ backgroundColor: "#fff" });
        expect(bn('bg-black')).toStrictEqual({ backgroundColor: "black" });
    });
    it('text', () => {
        const bn = useBootnative();
        expect(bn('text-blue')).toStrictEqual({ color: "#057AFC" });
        expect(bn('text-primary')).toStrictEqual({ color: "#057AFC" });
        expect(bn('text-#fff')).toStrictEqual({ color: "#fff" });
        expect(bn('text-center')).toStrictEqual({ textAlign: 'center' });
        expect(bn('text-#fff text-center')).toStrictEqual({ color:'#fff', textAlign:'center' });
    });
});