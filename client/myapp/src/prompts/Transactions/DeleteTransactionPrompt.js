
import { useState } from 'react';
import { deleteTransaction } from '../../api/transactions';


function DeleteTransactionPrompt() {
    const [transactionID, setTransactionID] = useState("");
    const [created, setCreated] = useState('')
    const [display, setDisplay] = useState('')
    
    async function onDeleteTransaction(event)  {
      event.preventDefault()      


        const response1 = await deleteTransaction(transactionID);
        console.log(response1)
         alert(response1)
         setCreated("Done")    
         setDisplay(response1)

    }

    if(created && display){
      console.log(1)
        return (
          <div className="prompt1">
            <p>{display}</p>
          </div>

        )
    }


    return (
<div className="prompt1">
<form onSubmit={(e)=>{onDeleteTransaction(e)}} >
    <p className='formtitle'> Enter Transaction Details </p>
        <label>
          Transaction ID:
          <div>
            <input
            required
              id="id"
              value={transactionID}
              onChange={(e) => setTransactionID(e.currentTarget.value)}
            />
          </div>
        </label>

       

          <input className='submission' type='submit' value='Submit' />

        

      </form>


</div>
    );
  }
  

  export default DeleteTransactionPrompt;