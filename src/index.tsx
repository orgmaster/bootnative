import styleParser from './core/styleParser';
import styles from './styles';


export default function useBootnative (custom:object = {vars:{},colors:{}}) {
  return function(style:string){
    return styleParser(style, styles(custom))
  };
}