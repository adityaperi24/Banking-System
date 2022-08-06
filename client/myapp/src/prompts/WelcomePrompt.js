import createBrowserHistory from 'history/createBrowserHistory';
import { useHistory } from 'react-router-dom';
function WelcomePrompt() {

    const history = useHistory(); 
    const handleClick = (e) => {
        const type = e.target.value
        const path = `/${type}`
        history.push(path)
        history.go(0)
    }
    return (
<div className="prompt1">
    <p className="prompttext">Hi! What would you like to view?</p>
    <button className='button1' type="button" onClick={handleClick} value='accounts'>
        Accounts
    </button>

    <button className="button2" type="button" onClick={handleClick} value='transactions' > Transactions </button>
</div>
    );
  }
  

  export default WelcomePrompt;