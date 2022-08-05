import createBrowserHistory from 'history/createBrowserHistory';
import { useHistory } from 'react-router-dom';
function AccountsPrompt() {

    const history = useHistory(); 
    const handleClick = (e) => {
        const type = e.target.value
        const path = `/accounts/${type}`
        history.push(path)
        history.go(0)
    }
    return (
<div className="prompt1">
    <p className="prompttext2">Select an Option</p>
    <button className='button3' type="button" onClick={handleClick} value='create'>
        Create an Account
    </button>

    <button className="button3" type="button" onClick={handleClick} value='view' > View an Account </button>
    <button className="button3" type="button" onClick={handleClick} value='viewall' > View all Accounts </button>
    <button className="button3" type="button" onClick={handleClick} value='delete' > Delete an Account </button>
    <button className="button3" type="button" onClick={handleClick} value='withdraw' > Withdraw Money From Account </button>


</div>
    );
  }
  

  export default AccountsPrompt;