const API_ENDPOINT = 'http://localhost:3000'

 
export const createAccount = async (id,name,type, amount) => {
    try{
    const response = await fetch(API_ENDPOINT + `/view/${id}/${name}/${type}/${amount}`,{
        method: "POST"
    });
  
    const {message} = await response.json();
  
    return message;
}catch(err){
    console.log(err.message)
}
  };

  export const responseAccount = async (id,name) => {
    try{
    const response = await fetch(API_ENDPOINT + `/view/${id}/`,{
        method: "GET"
    });
    const status =  response.status
    const accountDetails = await response.json();
    
    const responseObject = {
        status: status,
        accountDetails: accountDetails
    }
    return responseObject;
}catch(err){
    console.log(err.message)
}
  };
  
  export const allAccounts = async (id,name) => {
    try{
    const response = await fetch(API_ENDPOINT + `/view/`,{
        method: "GET"
    });
    const status =  response.status
    const { accounts } = await response.json();
    
    const responseObject = {
        status: status,
        accounts: accounts
    }
    return responseObject;
}catch(err){
    console.log(err.message)
}
  };

  export const deleteAccount = async (id,username) => {
    try{
    const response = await fetch(API_ENDPOINT + `/view/${id}`,{
        method: "DELETE"
    });
    const {message} = await response.json();
    return message;


    }
catch(err){
    console.log(err.message)
}
  };


  
  export const updateAccount = async (id,amount) => {
    try{
    const response = await fetch(API_ENDPOINT + `/view/${id}/${amount}`,{
        method: "PUT"
    });
    const {message} = await response.json();
    return message;


    }
catch(err){
    console.log(err.message)
}
  };