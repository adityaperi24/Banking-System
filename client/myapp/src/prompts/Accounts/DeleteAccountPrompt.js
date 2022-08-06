
import { useState } from 'react';
import { deleteAccount } from '../../api/accounts';




function DeleteAccountPrompt() {
    const [accountNo, setAccountNo] = useState("");
    const [username, setUsername] = useState("");
    const [created, setCreated] = useState('')
    const [display, setDisplay] = useState('')
    
    async function onDeleteAccount(event)  {
      event.preventDefault()      


        const response1 = await deleteAccount(accountNo,username);
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
<form onSubmit={(e)=>{onDeleteAccount(e)}} >
    <p className='formtitle'> Enter Account Details </p>
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
          User Name:
          <div>
            <input
            required
              id="name"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
          </div>
        </label>
       

          <input className='submission' type='submit' value='Submit' />

        

      </form>


</div>
    );
  }
  

  export default DeleteAccountPrompt;