import helpers from './helpers';


export default function(customVars:object) : object{

    const styles : object = {
        ...helpers(customVars),
    
    }
    
    return styles;
};