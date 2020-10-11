import styleParser from './core/styleParser';
import styles from './styles';

// Delete me
export default function useBootnative (customVars:object = {}) {
  return function(style:string){
    return styleParser(style, styles(customVars))
  };
}