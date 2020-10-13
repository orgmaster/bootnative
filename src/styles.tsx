import utilities from './utilities';
import layout from './layout';

export default function(custom:any) : object{

    const styles : object = {
        ...utilities(custom.vars),
        ...layout(custom.vars),
        objectProp:{
            test:'objectProps ok'
        },
        functionProp:()=>{
            return {
                test:'functionProps ok'
            }
        },

        bg: function (color:string):object {
            return {
                backgroundColor: color
            }
        },
        btn: function (color:string) {
            return {
                backgroundColor: color
            }
        }
    }
    
    return styles;
};