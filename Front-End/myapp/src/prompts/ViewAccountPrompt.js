
import { useState } from 'react';
import { responseAccount } from '../api/accounts';




function ViewAccountPrompt() {
    const [accountNo, setAccountNo] = useState("");
    const [username, setUsername] = useState("");
    const [created, setCreated] = useState('')
    const [display, setDisplay] = useState('')
    const [stat, setStat] = useState('')
    
    async function onViewAccount(event)  {
      event.preventDefault()      

      // console.log(1)

        const received = await responseAccount(accountNo,username);
        const {status} = received
        const {accountDetails} = received
         alert('Status is: ' + status)
         setStat(status)
         setCreated("Done")    
         setDisplay(accountDetails)

    }

    if(created && display){
        if(stat === 200 ) {
        return (
          <div className="prompt1">
            <div className='response'>
            <p>Account Details:</p>
            <p>Account No: {display.budgetID}</p>
            <p>Username: {display.name}</p>
            <p>Type: {display.username}</p>
            <p>Amount: {display.budget}</p>
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
            <p>Account Not Found</p>

            </div>

          </div>
            )
        
    }

    return (
<div className="prompt1">
<form onSubmit={(e)=>{onViewAccount(e)}} >
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
  

  export default ViewAccountPrompt;