
import { useState } from 'react';
import { createTransaction } from '../../api/transactions';



function CreateTransactionPrompt() {
    const [transactionID, setTransactionID] = useState("");
    const [amount, setAmount] = useState("");

    const [sender, setSender] = useState("");
    const [recipent, setRecipent] = useState("");
    const [created, setCreated] = useState('')
    const [display, setDisplay] = useState('')

    
    async function onCreateTransaction(event)  {
      event.preventDefault()      

      

        const response1 = await createTransaction(transactionID, amount, sender, recipent);
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
<form onSubmit={(e)=>{onCreateTransaction(e)}} >
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
        <label>
          Amount
          <div>
            <input
            required
              id="name"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
          </div>
        </label>
        <label>
          Sender Account No:
          <div>
            <input
            required
              id="type"
              value={sender}
              onChange={(e) => setSender(e.currentTarget.value)}
            />
          </div>
          </label>
          <label>
           Recipent Account No.:
          <div>
            <input
            required
              id="amount"
              value={recipent}
              onChange={(e) => setRecipent(e.currentTarget.value)}
            />
          </div>
          </label>

          <input className='submission' type='submit' value='Submit' />

        

      </form>


</div>
    );
  }
  

  export default CreateTransactionPrompt;