import useBootnative from '../src';
import { _window } from '../src/core/vars';

const customVars = {
  spacing:10
}

describe('Layout: container', () => {
  it('return correct width', () => {
    const bn = useBootnative(customVars);
    
    const calculeWidth = (size:string|null = null) => {

        if(_window.width >= 1200 && size === null) return 1140;
        if(_window.width >= 1200 && size === 'sm') return 1140; 
        if(_window.width >= 1200 && size === 'md') return 1140; 
        if(_window.width >= 1200 && size === 'lg') return 1140; 
        if(_window.width >= 1200 && size === 'xl') return 1140; 
        if(_window.width >= 1200 && size === 'fluid') return _window.width;

        if(_window.width === 750 && size === null) return 540;
        if(_window.width === 750 && size === 'sm') return 540; 
        if(_window.width === 750 && size === 'md') return 750; 
        if(_window.width === 750 && size === 'lg') return 750; 
        if(_window.width === 750 && size === 'xl') return 750; 
        if(_window.width === 750 && size === 'fluid') return _window.width;

        if(_window.width === 1024 && size === null) return 960;
        if(_window.width === 1024 && size === 'sm') return 960; 
        if(_window.width === 1024 && size === 'md') return 960; 
        if(_window.width === 1024 && size === 'lg') return 960; 
        if(_window.width === 1024 && size === 'xl') return 1024; 
        if(_window.width === 1024 && size === 'fluid') return _window.width;

        if(_window.width < 576 && size === null) return _window.width;
        if(_window.width < 576 && size === 'sm') return _window.width; 
        if(_window.width < 576 && size === 'md') return _window.width; 
        if(_window.width < 576 && size === 'lg') return _window.width; 
        if(_window.width < 576 && size === 'xl') return _window.width; 
        if(_window.width < 576 && size === 'fluid') return _window.width;
    }

    let props = {
        flex: 1,
        marginTop: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: _window.width
    }
    expect(bn('container')).toStrictEqual({...props, width:calculeWidth()});
    expect(bn('container-sm')).toStrictEqual({...props, width:calculeWidth('sm')});
    expect(bn('container-md')).toStrictEqual({...props, width:calculeWidth('md')});
    expect(bn('container-lg')).toStrictEqual({...props, width:calculeWidth('lg')});
    expect(bn('container-xl')).toStrictEqual({...props, width:calculeWidth('xl')});
    expect(bn('container-fluid')).toStrictEqual({...props, width:calculeWidth('fluid')});
  });
});
