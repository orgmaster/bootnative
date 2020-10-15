import useBootnative from '../src';

describe('colors', () => {
    it('bg', () => {
        const bn = useBootnative();
        expect(bn('bg-red')).toStrictEqual({ backgroundColor: "red" });
    });
    it('text', () => {
        const bn = useBootnative();
        expect(bn('text-blue')).toStrictEqual({ color: "blue" });
        expect(bn('text-center')).toStrictEqual({ textAlign: 'center' });
        expect(bn('text-red-right')).toStrictEqual({ textAlign: 'right', color: 'red' });
    });
});