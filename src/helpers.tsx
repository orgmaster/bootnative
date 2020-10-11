import useCustomVars from './core/useCustomVars';

interface Helper {
}


export default function(customVars:object) : object{
    const vars = useCustomVars(customVars);
    
    const helpers : Helper = {
    }
    
    return helpers;
};