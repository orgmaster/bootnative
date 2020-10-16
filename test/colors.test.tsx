import useBootnative from '../src';

describe('colors', () => {
    it('bg', () => {
        const bn = useBootnative();
        expect(bn('bg-red')).toStrictEqual({ backgroundColor: "red" });
    });
    it('text', () => {
        const bn = useBootnative();
        expect(bn('text-blue')).toStrictEqual({ color: "#057AFC" });
        expect(bn('text-primary')).toStrictEqual({ color: "#057AFC" });
        expect(bn('text-#fff')).toStrictEqual({ color: "#fff" });
        expect(bn('text-center')).toStrictEqual({ textAlign: 'center' });
    });
});