import useCustomVars from './core/useCustomVars';
import colors from './core/colors';

function validateScale(scale: string) {
    if (scale != 'auto' && parseInt(scale) < 1) throw new Error('The min scale is: 1');
}


export default function (customVars: object): object {
    const { spacing } = useCustomVars(customVars);


    function scalar(scale: string) {
        return scale == 'auto' ? scale : spacing * parseInt(scale);
    }

    const positions: string[] = ['center', 'left', 'right', 'justify'];
    
    return {

        /*

            Colors

        */

        text: (value: string) => {

            if(positions.includes(value)){
                return{textAlign:value}
            }else{
                return{color:colors[value] || value}
            }
        },

        bg: (color: string) => {
            return {
                backgroundColor: colors[color] || color
            }
        },

        /*

            Borders

        */

        border: (size: string = '1', color: string = 'black', style: string = 'solid', radius: string = '0.0001') => {
            return {
                borderWidth: parseInt(size),
                borderStyle: style,
                borderColor: colors[color] || color,
                borderRadius: parseFloat(radius)
            }
        },

        borderTop: (size: string = '1', color: string = 'black') => {
            return {
                borderTopWidth: parseInt(size),
                borderTopColor: colors[color] || color
            }
        },

        borderRight: (size: string = '1', color: string = 'black') => {
            return {
                borderRightWidth: parseInt(size),
                borderRightColor: colors[color] || color
            }
        },

        borderBottom: (size: string = '1', color: string = 'black') => {
            return {
                borderBottomWidth: parseInt(size),
                borderBottomColor: colors[color] || color
            }
        },

        borderLeft: (size: string = '1', color: string = 'black') => {
            return {
                borderLeftWidth: parseInt(size),
                borderLeftColor: colors[color] || color
            }
        },

        borderY: (size: string = '1', color: string = 'black') => {
            return {
                borderTopWidth: parseInt(size),
                borderTopColor: colors[color] || color,
                borderBottomWidth: parseInt(size),
                borderBottomColor: colors[color] || color
            }
        },
        borderX: (size: string = '1', color: string = 'black') => {
            return {
                borderLeftWidth: parseInt(size),
                borderLeftColor: colors[color] || color,
                borderRightWidth: parseInt(size),
                borderRightColor: colors[color] || color
            }
        },

        // border color
        borderColor: (color: string, position: string) => {
            if (!position) {
                return {
                    borderColor: colors[color] || color
                }
            }
            switch (position) {
                case "top": {
                    return {
                        borderTopColor: colors[color] || color
                    }
                }
                // no funciona (native bug)
                case "right": {
                    return {
                        borderRightColor: colors[color] || color
                    }
                }
                case "bottom": {
                    return {
                        borderBottomColor: colors[color] || color
                    }
                }
                // no funciona (native bug)
                case "left": {
                    return {
                        borderLeftColor: colors[color] || color
                    }
                }
                case "y": {
                    return {
                        borderTopColor: colors[color] || color,
                        borderBottomColor: colors[color] || color
                    }
                }
                case "x": {
                    return {
                        borderRightColor: colors[color] || color,
                        borderLeftColor: colors[color] || color
                    }
                }
                default: {
                    return {
                        borderColor: colors[color] || color
                    }
                }
            }
        },

        // border size
        borderSize: (size: string, position: string) => {
            const sizeInt: number = parseInt(size)
            if (!position) {
                return {
                    borderWidth: sizeInt
                }
            }
            switch (position) {
                case "top": {
                    return {
                        borderTopWidth: sizeInt
                    }
                }
                case "right": {
                    return {
                        borderRightWidth: sizeInt
                    }
                }
                case "bottom": {
                    return {
                        borderBottomWidth: sizeInt
                    }
                }
                case "left": {
                    return {
                        borderLeftWidth: sizeInt
                    }
                }
                default: {
                    return {
                        borderWidth: sizeInt
                    }
                }
            }

        },

        // border style
        borderStyle: (style: string) => {
            return {
                borderStyle: style
            }
        },

        // border radius    
        borderRadius: (radius: string, position: string, alternativePosition: string) => {
            const radiusInt: number = parseInt(radius)
            if (!position) {
                return {
                    borderRadius: radiusInt
                }
            }
            if (!alternativePosition || (alternativePosition !== "left" && alternativePosition !== "right")) {
                switch (position) {
                    case "top": {
                        return {
                            borderTopRightRadius: radiusInt,
                            borderTopLeftRadius: radiusInt
                        }
                    }
                    case "right": {
                        return {
                            borderTopRightRadius: radiusInt,
                            borderBottomRightRadius: radiusInt
                        }
                    }
                    case "bottom": {
                        return {
                            borderBottomRightRadius: radiusInt,
                            borderBottomLeftRadius: radiusInt
                        }
                    }
                    case "left": {
                        return {
                            borderTopLeftRadius: radiusInt,
                            borderBottomLeftRadius: radiusInt
                        }
                    }
                    default: {
                        return {
                            borderRadius: radiusInt
                        }
                    }
                }
            }
            else {
                switch (position + "-" + alternativePosition) {
                    case "top-right": {
                        return {
                            borderTopRightRadius: radiusInt
                        }
                    }
                    case "top-left": {
                        return {
                            borderTopLeftRadius: radiusInt
                        }
                    }
                    case "bottom-right": {
                        return {
                            borderBottomRightRadius: radiusInt
                        }
                    }
                    case "bottom-left": {
                        return {
                            borderBottomLeftRadius: radiusInt
                        }
                    }
                    default: {
                        return {}
                    }
                }
            }
        },

        /*

        Spacing

    */

        //padding
        p: (scale: string = '1') => {
            validateScale(scale);
            return {
                padding: scalar(scale)
            }
        },
        pb: (scale: string = '1') => {
            validateScale(scale);
            return {
                paddingBottom: scalar(scale)
            }
        },
        pt: (scale: string = '1') => {
            validateScale(scale);
            return {
                paddingTop: scalar(scale)
            }
        },
        py: (scale: string = '1') => {
            validateScale(scale);
            return {
                paddingVertical: scalar(scale)
            }
        },
        pl: (scale: string = '1') => {
            validateScale(scale);
            return {
                paddingLeft: scalar(scale)
            }
        },
        pr: (scale: string = '1') => {
            validateScale(scale);
            return {
                paddingRight: scalar(scale)
            }
        },
        px: (scale: string = '1') => {
            validateScale(scale);
            return {
                paddingHorizontal: scalar(scale)
            }
        },

        //margin
        m: (scale: string = '1') => {
            validateScale(scale);
            return {
                margin: scalar(scale)
            }
        },
        mb: (scale: string = '1') => {
            validateScale(scale);
            return {
                marginBottom: scalar(scale)
            }
        },
        mt: (scale: string = '1') => {
            validateScale(scale);
            return {
                marginTop: scalar(scale)
            }
        },
        my: (scale: string = '1') => {
            validateScale(scale);
            return {
                marginVertical: scalar(scale)
            }
        },
        ml: (scale: string = '1') => {
            validateScale(scale);
            return {
                marginLeft: scalar(scale)
            }
        },
        mr: (scale: string = '1') => {
            validateScale(scale);
            return {
                marginRight: scalar(scale)
            }
        },
        mx: (scale: string = '1') => {
            validateScale(scale);
            return {
                marginHorizontal: scalar(scale)
            }
        }
    }
};