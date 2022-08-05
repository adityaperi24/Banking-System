
import { useState } from 'react';
import { viewTransaction } from '../../api/transactions';



function ViewTransactionPrompt() {
    const [transactionID, setTransactionID] = useState("");
    const [created, setCreated] = useState('')
    const [display, setDisplay] = useState('')
    const [stat, setStat] = useState('')
    
    async function onViewTransaction(event)  {
      event.preventDefault()      


        const received = await viewTransaction(transactionID);
        const {status} = received
        const {transactionDetails} = received
         alert('Status is: ' + status)
         setStat(status)
         setCreated("Done")    
         setDisplay(transactionDetails)
         console.log(transactionDetails)

    }

    if(created && display){
        if(stat === 200 ) {
        return (
          <div className="prompt1">
            <div className='response'>
            <p>Transaction Details:</p>
            <p>Transaction ID: {display.TID}</p>
            <p>Amount: {display.amount}</p>
            <p>Date: {display.date}</p>
            <p>Sender Account No: {display.senderAccount}</p>
            <p>Recipent Account No: {display.recipentAccount}</p>
            </div>

          </div>

        )
        }

    }

    if(created && stat !== 200){
            console.log(stat)
            return (
            <div className="prompt1">
            <div className='response'>
            <p>Transaction Not Found</p>

            </div>

          </div>
            )
        
    }

    return (
<div className="prompt1">
<form onSubmit={(e)=>{onViewTransaction(e)}} >
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
  

  export default ViewTransactionPrompt;