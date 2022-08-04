import {useHistory} from 'react-router-dom';
import { createBrowserHistory } from 'history';
 function BackComponent(props) {


const name = props.name
const display = props.display
const history = createBrowserHistory({forceRefresh: true })
const handleClick = () => {
    

        const path = `/${name}`
        history.push(path)
}

  return (
    
    <button className="backbutton" type="button" onClick={handleClick}  > {display} </button>  );
    
  }
  export default  BackComponent