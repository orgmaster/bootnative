import helpers from './helpers';


export default function(customVars:object) : object{

    const styles : object = {
        ...helpers(customVars),
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