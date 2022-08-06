import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import { allAccounts } from "../../api/accounts";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";

function ViewAllAccountsPage() {
  const [data, setData] = useState(null)
   
  

   useEffect(()=> {
    async function fetchData(){
    const response =  await allAccounts()
    const {accounts} = response
    const extractAccounts = accounts
    setData(extractAccounts)

    }
    fetchData()
   },[])


  if(!data){
    return(
    <body className="page">   
     <HEADING heading = 'View All Accounts'/>
     <p>loading</p>
     <BackComponent name='' display = 'Home'/>
</body>
)
  }


  return (
<div className="page">   
     <HEADING heading = 'View All Accounts'/>
      <div className='table2'>
     <table className="table">
    <thead>
    <tr>
      <th>Account No.</th>
      <th>Username</th>
      <th>Type</th>
      <th>Amount</th>
    </tr>
    </thead>
    <tbody>
            
    { data.map((element) => (
          <tr>
                   <td>{element.budgetID}</td>
                   <td>{element.name}</td>
                   <td>{element.username}</td>
                   <td>{element.budget}</td>
                </tr>
              )
        )
      }


    </tbody>

  </table>
  </div>
<BackComponent name='' display = 'Home'/>
</div>

  );
}
export default ViewAllAccountsPage;