import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import { allTransactions } from "../../api/transactions";
import { useState } from "react";
import { useEffect } from "react";

function ViewAllTransactionsPage() {
  const [data, setData] = useState(null)
   
  

   useEffect(()=> {
    async function fetchData(){
    const response =  await allTransactions()
    const {transactions} = response
    console.log(transactions)
    const extractAccounts = transactions
    setData(extractAccounts)

    }
    fetchData()
   },[])


  if(!data){
    return(
    <body className="page">   
     <HEADING heading = 'View All Transactions'/>
     <p>loading</p>
     <BackComponent name='' display = 'Home'/>
</body>
)
  }


  return (
<div className="page">   
     <HEADING heading = 'View All Transactions'/>
      <div className='table2'>
     <table className="table">
    <thead>
    <tr>
      <th>TID</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Sender Account</th>
      <th>Recipent Account</th>

    </tr>
    </thead>
    <tbody>
            
    { data.map((element) => (
          <tr>
                   <td>{element.TID}</td>
                   <td>{element.amount}</td>
                   <td>{element.date}</td>
                   <td>{element.senderAccount}</td>
                   <td>{element.recipentAccount}</td>

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
export default ViewAllTransactionsPage;