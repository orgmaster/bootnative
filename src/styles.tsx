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
        }
    }
    
    return styles;
};