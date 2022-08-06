import createBrowserHistory from 'history/createBrowserHistory';
import { useHistory } from 'react-router-dom';
function TransactionsPrompt() {

    const history = useHistory(); 
    const handleClick = (e) => {
        const type = e.target.value
        const path = `/transactions/${type}`
        history.push(path)
        history.go(0)
    }
    return (
<div className="prompt1">
    <p className="prompttext2">Select an Option</p>
    <button className='button3' type="button" onClick={handleClick} value='create'>
        Make a Transaction
    </button>

    <button className="button3" type="button" onClick={handleClick} value='view' > View a Transaction </button>
    <button className="button3" type="button" onClick={handleClick} value='viewall' > View all Transactions </button>
    <button className="button3" type="button" onClick={handleClick} value='delete' > Delete a Transaction </button>


</div>
    );
  }
  

  export default TransactionsPrompt;