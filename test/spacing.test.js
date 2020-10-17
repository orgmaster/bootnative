'use strict';

const legacy = require('../src/core/vars');
const utilities = require('../src/utilities');


const {spacing} = legacy().vars;


const styles = utilities({});

describe('spacing', () => {
  it('margin scale', () => {
    expect(styles.m('4')).toStrictEqual({margin:spacing * 4});
    expect(styles.mt('2')).toStrictEqual({marginTop:spacing * 2});
    expect(styles.mb('3')).toStrictEqual({marginBottom:spacing * 3});
    expect(styles.mr('1')).toStrictEqual({marginRight:spacing * 1});
    expect(styles.ml('5')).toStrictEqual({marginLeft:spacing * 5});
    expect(styles.my('7')).toStrictEqual({marginVertical:spacing * 7});
    expect(styles.mx('6')).toStrictEqual({marginHorizontal:spacing * 6});
  });

  it('margin auto', () => {
    expect(styles.m('auto')).toStrictEqual({margin:'auto'});
    expect(styles.mt('auto')).toStrictEqual({marginTop:'auto'});
    expect(styles.mb('auto')).toStrictEqual({marginBottom:'auto'});
    expect(styles.mr('auto')).toStrictEqual({marginRight:'auto'});
    expect(styles.ml('auto')).toStrictEqual({marginLeft:'auto'});
    expect(styles.my('auto')).toStrictEqual({marginVertical:'auto'});
    expect(styles.mx('auto')).toStrictEqual({marginHorizontal:'auto'});
  });

  it('padding scale', () => {
    expect(styles.p('4')).toStrictEqual({padding:spacing * 4});
    expect(styles.pt('2')).toStrictEqual({paddingTop:spacing * 2});
    expect(styles.pb('3')).toStrictEqual({paddingBottom:spacing * 3});
    expect(styles.pr('1')).toStrictEqual({paddingRight:spacing * 1});
    expect(styles.pl('5')).toStrictEqual({paddingLeft:spacing * 5});
    expect(styles.py('7')).toStrictEqual({paddingVertical:spacing * 7});
    expect(styles.px('6')).toStrictEqual({paddingHorizontal:spacing * 6});
  });

  it('padding auto', () => {
    expect(styles.p('auto')).toStrictEqual({padding:'auto'});
    expect(styles.pt('auto')).toStrictEqual({paddingTop:'auto'});
    expect(styles.pb('auto')).toStrictEqual({paddingBottom:'auto'});
    expect(styles.pr('auto')).toStrictEqual({paddingRight:'auto'});
    expect(styles.pl('auto')).toStrictEqual({paddingLeft:'auto'});
    expect(styles.py('auto')).toStrictEqual({paddingVertical:'auto'});
    expect(styles.px('auto')).toStrictEqual({paddingHorizontal:'auto'});
  });

  it('scale error', () => {
    try {
        styles.m('0');
        expect(true).toBe("This test must to fail");  
    } catch (e) {
        expect(e.message).toBe("The min scale is: 1");  
    }
  });
});
