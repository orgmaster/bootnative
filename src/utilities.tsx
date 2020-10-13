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

            Border

        */

        //border-additive

        border: (size: string = '1', color: string = 'black', style: string = 'solid') => {
            if (size === '0') {
                return {
                    border: "none"
                }
            }
            return {
                border: size + "px" + " " + style + " " + color
            }
        },

        borderTop: (size: string = '1', color: string = 'black', style: string = 'solid') => {
            return {
                borderTop: size + "px" + " " + style + " " + color
            }
        },

        borderRight: (size: string = '1', color: string = 'black', style: string = 'solid') => {
            return {
                borderRight: size + "px" + " " + style + " " + color
            }
        },

        borderBottom: (size: string = '1', color: string = 'black', style: string = 'solid') => {
            return {
                borderBottom: size + "px" + " " + style + " " + color
            }
        },

        borderLeft: (size: string = '1', color: string = 'black', style: string = 'solid') => {
            return {
                borderLeft: size + "px" + " " + style + " " + color
            }
        },

        borderY: (size: string = '1', color: string = 'black', style: string = 'solid') => {
            return {
                borderTop: size + "px" + " " + style + " " + color,
                borderBottom: size + "px" + " " + style + " " + color
            }
        },

        borderX: (size: string = '1', color: string = 'black', style: string = 'solid') => {
            return {
                borderRight: size + "px" + " " + style + " " + color,
                borderLeft: size + "px" + " " + style + " " + color
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