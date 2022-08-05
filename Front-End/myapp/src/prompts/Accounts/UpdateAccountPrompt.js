
import { useState } from 'react';
import { updateAccount } from '../../api/accounts';




function UpdateAccountPrompt() {
    const [accountNo, setAccountNo] = useState("");
    const [amount, setAmount] = useState("");
    const [created, setCreated] = useState('')
    const [display, setDisplay] = useState('')
    
    async function onUpdateAccount(event)  {
      event.preventDefault()      


        const response1 = await updateAccount(accountNo,amount);
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
<form onSubmit={(e)=>{onUpdateAccount(e)}} >
    <p className='formtitle'> Enter  Details </p>
        <label>
          Account No:
          <div>
            <input
            required
              id="id"
              value={accountNo}
              onChange={(e) => setAccountNo(e.currentTarget.value)}
            />
          </div>
        </label>
        <label>
          Amount:
          <div>
            <input
            required
              id="name"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
          </div>
        </label>
       

          <input className='submission' type='submit' value='Submit' />

        

      </form>


</div>
    );
  }
  

  export default UpdateAccountPrompt;