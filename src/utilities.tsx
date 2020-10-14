import useCustomVars from './core/useCustomVars';

function validateScale(scale: string) {
    if (scale != 'auto' && parseInt(scale) < 1) throw new Error('The min scale is: 1');
}


export default function (customVars: object): object {
    const { spacing } = useCustomVars(customVars);


    function scalar(scale: string) {
        return scale == 'auto' ? scale : spacing * parseInt(scale);
    }

    return {

        /*

            Borders

        */

        border: (size: string = '1', color: string = 'black', style: string = 'solid', radius: string = '0.0001') => {
            return {
                borderWidth: parseInt(size),
                borderStyle: style,
                borderColor: color,
                borderRadius: parseFloat(radius)
            }
        },

        borderTop: (size: string = '1', color: string = 'black') => {
            return {
                borderTopWidth: parseInt(size),
                borderTopColor: color
            }
        },

        borderRight: (size: string = '1', color: string = 'black') => {
            return {
                borderRightWidth: parseInt(size),
                borderRightColor: color
            }
        },

        borderBottom: (size: string = '1', color: string = 'black') => {
            return {
                borderBottomWidth: parseInt(size),
                borderBottomColor: color
            }
        },

        borderLeft: (size: string = '1', color: string = 'black') => {
            return {
                borderLeftWidth: parseInt(size),
                borderLeftColor: color
            }
        },

        borderY: (size: string = '1', color: string = 'black') => {
            return {
                borderTopWidth: parseInt(size),
                borderTopColor: color,
                borderBottomWidth: parseInt(size),
                borderBottomColor: color
            }
        },
        borderX: (size: string = '1', color: string = 'black') => {
            return {
                borderLeftWidth: parseInt(size),
                borderLeftColor: color,
                borderRightWidth: parseInt(size),
                borderRightColor: color
            }
        },

        // border color
        borderColor: (color: string, position: string = '') => {
            switch (position) {
                case "top": {
                    return {
                        borderTopColor: color
                    }
                }
                // no funciona (native bug)
                case "right": {
                    return {
                        borderRightColor: color
                    }
                }
                case "bottom": {
                    return {
                        borderBottomColor: color
                    }
                }
                // no funciona (native bug)
                case "left": {
                    return {
                        borderLeftColor: color
                    }
                }
                case "y": {
                    return {
                        borderTopColor: color,
                        borderBottomColor: color
                    }
                }
                case "x": {
                    return {
                        borderRightColor: color,
                        borderLeftColor: color
                    }
                }
                default: {
                    return {
                        borderColor: color
                    }
                }
            }
        },

        // border radius    

        borderRadius: (radius: string, position: string = '', alternativePosition: string = '') => {
            if (!alternativePosition || (alternativePosition !== "left" && alternativePosition !== "right")) {
                switch (position) {
                    case "top": {
                        return {
                            borderTopRightRadius: radius,
                            borderTopLeftRadius: radius
                        }
                    }
                    case "right": {
                        return {
                            borderTopRightRadius: radius,
                            borderBottomRightRadius: radius
                        }
                    }
                    case "bottom": {
                        return {
                            borderBottomRightRadius: radius,
                            borderBottomLeftRadius: radius
                        }
                    }
                    case "left": {
                        return {
                            borderTopLeftRadius: radius,
                            borderBottomLeftRadius: radius
                        }
                    }
                    default: {
                        return {
                            borderRadius: radius
                        }
                    }
                }
            }
            else {
                switch (position + "-" + alternativePosition) {
                    case "top-right": {
                        return {
                            borderTopRightRadius: radius
                        }
                    }
                    case "top-left": {
                        return {
                            borderTopLeftRadius: radius
                        }
                    }
                    case "bottom-right": {
                        return {
                            borderBottomRightRadius: radius
                        }
                    }
                    case "bottom-left": {
                        return {
                            borderBottomLeftRadius: radius
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