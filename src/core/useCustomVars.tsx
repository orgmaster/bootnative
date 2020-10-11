import vars from './vars';

const useCustomVars = (customVars:object):object => {
    return {
        ...vars,
        ...customVars
    }

}
export default useCustomVars;