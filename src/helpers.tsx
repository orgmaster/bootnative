import useCustomVars from './core/useCustomVars';

function validateScale(scale:string){
    if(scale != 'auto' && parseInt(scale) < 1) throw new Error('The min scale is: 1');
}


export default function(customVars:object) : object{
    const {spacing} = useCustomVars(customVars);


    function scalar(scale:string){
        return scale == 'auto' ? scale : spacing * parseInt(scale);
    }

    return {

        //padding
        p: (scale:string = '1') => {
            validateScale(scale);
            return {
                padding: scalar(scale)
            }
        },
        pb: (scale:string = '1') => {
            validateScale(scale);
            return {
                paddingBottom: scalar(scale)
            }
        },
        pt: (scale:string = '1') => {
            validateScale(scale);
            return {
                paddingTop: scalar(scale)
            }
        },
        py: (scale:string = '1') => {
            validateScale(scale);
            return {
                paddingVertical: scalar(scale)
            }
        },
        pl: (scale:string = '1') => {
            validateScale(scale);
            return {
                paddingLeft: scalar(scale)
            }
        },
        pr: (scale:string = '1') => {
            validateScale(scale);
            return {
                paddingRight: scalar(scale)
            }
        },
        px: (scale:string = '1') => {
            validateScale(scale);
            return {
                paddingHorizontal: scalar(scale)
            }
        },

        //margin
        m: (scale:string = '1') => {
            validateScale(scale);
            return {
                margin: scalar(scale)
            }
        },
        mb: (scale:string = '1') => {
            validateScale(scale);
            return {
                marginBottom: scalar(scale)
            }
        },
        mt: (scale:string = '1') => {
            validateScale(scale);
            return {
                marginTop: scalar(scale)
            }
        },
        my: (scale:string = '1') => {
            validateScale(scale);
            return {
                marginVertical: scalar(scale)
            }
        },
        ml: (scale:string = '1') => {
            validateScale(scale);
            return {
                marginLeft: scalar(scale)
            }
        },
        mr: (scale:string = '1') => {
            validateScale(scale);
            return {
                marginRight: scalar(scale)
            }
        },
        mx: (scale:string = '1') => {
            validateScale(scale);
            return {
                marginHorizontal: scalar(scale)
            }
        }
    }
};