
// import { response } from 'express';
import { useState } from 'react';
import { createAccount } from '../../api/accounts';
// import { useHistory } from 'react-router-dom';




function CreateAccountPrompt() {
    const [accountNo, setAccountNo] = useState("");
    const [accountType, setAccountType] = useState("");
    const [username, setUsername] = useState("");
    const [amount, setAmount] = useState("");
    const [created, setCreated] = useState('')
    const [display, setDisplay] = useState('')

    // const history = useHistory()
    
    async function onCreateAccount(event)  {
      event.preventDefault()      

      // console.log(1)

        const response1 = await createAccount(accountNo,username, accountType, amount);
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



    // const history = useHistory(); 
    // const handleClick = (e) => {
    //     const type = e.target.value
    //     const path = `/transactions/${type}`
    //     history.push(path)
    //     history.go(0)
    
    // }
    return (
<div className="prompt1">
<form onSubmit={(e)=>{onCreateAccount(e)}} >
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
        <label>
          Account Type:
          <div>
            <input
            required
              id="type"
              value={accountType}
              onChange={(e) => setAccountType(e.currentTarget.value)}
            />
          </div>
          </label>
          <label>
           Amount:
          <div>
            <input
            required
              id="amount"
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
  

  export default CreateAccountPrompt;