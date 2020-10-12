import utilities from './utilities';


export default function(custom:any) : object{

    const styles : object = {
        ...utilities(custom.vars),
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