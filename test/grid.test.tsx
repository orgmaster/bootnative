import useBootnative from '../src';
import { _window, gridArray, grid} from '../src/core/vars';

const customVars = {
  spacing:10
}

describe('Layout: container', () => {
  it('return correct percentage', () => {
    const bn = useBootnative(customVars);
    
    const calculate = (scales:{[key:string]:any}) => {
        let device = gridArray.find(item => _window.width >= item.min  && _window.width <= item.max);
        let width:string|undefined
        let sizes:string[] = Object.keys(scales);
        //xs < 576
        //sm 750
        //md 840
        //lg 1024
        //xl >= 1200
        
        while (sizes.length) {
            let size = sizes[0];
            sizes.shift();
            let highest = grid[size];
            if(highest!== undefined && device.min >= highest.min)
                width = ((100/12)*scales[size])+'%';
        }

        return width ? {width} : {width:'100%'}
    }

    expect(bn('col-2-xs col-6-md')).toStrictEqual(calculate({xs:2,md:6}));
    expect(bn('col-2-xs')).toStrictEqual(calculate({xs:2}));
    expect(bn('col-2-sm')).toStrictEqual(calculate({sm:2}));
    expect(bn('col-2-md')).toStrictEqual(calculate({md:2}));
    expect(bn('col-2-lg')).toStrictEqual(calculate({lg:2}));
    expect(bn('col-2-xl')).toStrictEqual(calculate({xl:2}));

    expect(bn('col-2 col-8-sm')).toStrictEqual(calculate({xs:2, sm:8}));
    expect(bn('col-12-sm col-6-md')).toStrictEqual(calculate({sm:12, md:6}));
    expect(bn('col-6-md col-4-lg')).toStrictEqual(calculate({md:6, lg:4}));
    expect(bn('col-4-lg col-3-xl')).toStrictEqual(calculate({lg:4, xl:3}));
    expect(bn('col-5-lg col-4-xl')).toStrictEqual(calculate({lg:5,xl:4}));

    expect(bn('col-8-sm col-2')).toStrictEqual(calculate({xs:2, sm:8}));
    expect(bn('col-6-md col-12-sm')).toStrictEqual(calculate({sm:12, md:6}));
    expect(bn('col-4-lg col-6-md')).toStrictEqual(calculate({md:6, lg:4}));
    expect(bn('col-3-xl col-4-lg')).toStrictEqual(calculate({lg:4, xl:3}));
    expect(bn('col-4-xl col-5-lg')).toStrictEqual(calculate({lg:5, xl:4}));
  });
});
