const API_ENDPOINT = 'http://localhost:3000'

 
export const createTransaction = async (id,amount,user1, user2) => {
    try{
    const response = await fetch(API_ENDPOINT + `/transaction/${id}/${amount}/${user1}/${user2}`,{
        method: "POST"
    });
  
    const {message} = await response.json();
  
    return message;
}catch(err){
    console.log(err.message)
}
  };

  export const viewTransaction = async (id,name) => {
    try{
    const response = await fetch(API_ENDPOINT + `/transaction/${id}/`,{
        method: "GET"
    });
    const status =  response.status
    const transactionDetails = await response.json();
    
    const responseObject = {
        status: status,
        transactionDetails: transactionDetails
    }
    return responseObject;
}catch(err){
    console.log(err.message)
}
  };
  
  export const allTransactions = async (id,name) => {
    try{
    const response = await fetch(API_ENDPOINT + `/transaction/`,{
        method: "GET"
    });
    const status =  response.status
    const { transactions } = await response.json();
    
    const responseObject = {
        status: status,
        transactions: transactions
    }
    return responseObject;
}catch(err){
    console.log(err.message)
}
  };

  export const deleteTransaction = async (id) => {
    try{
    const response = await fetch(API_ENDPOINT + `/transaction/${id}`,{
        method: "DELETE"
    });
    const {message} = await response.json();
    return message;


    }
catch(err){
    console.log(err.message)
}
  };


  
