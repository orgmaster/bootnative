import colors from './colors';

const useCustomColors = (customColors:object) => {
    return {
        ...colors,
        ...customColors
    }

}
export default useCustomColors;