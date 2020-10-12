export function hexToRgb(hex:string):object|boolean{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : false;
}



function componentToHex(c:string|number):string{
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r:string|number, g:string|number, b:string|number) :string {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}