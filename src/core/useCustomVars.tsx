import vars from './vars';

const useCustomVars = (customVars:object) => {
    return {
        ...vars,
        ...customVars
    }

}
export default useCustomVars;