import { useEffect } from 'react';
import './App.css';
import HomePage from './pagecomponents/homePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AccountsPage from './pagecomponents/Accounts/AccountsPage';
import TransactionsPage from './pagecomponents/Transactions/TransactionsPage';
import CreateAccountPage from './pagecomponents/Accounts/CreateAccountPage';
import ViewAccountPage from './pagecomponents/Accounts/ViewAccountPage';
import ViewAllAccountsPage from './pagecomponents/Accounts/ViewAllAccountsPage';
import DeleteAccountPage from './pagecomponents/Accounts/DeleteAccountPage';
import UpdateAccountPage from './pagecomponents/Accounts/UpdateAccountPage';
function App() {

  


  return (
    <div>
    <Router>

     <Route exact path='/'>      
        <HomePage/>
     </Route>      

     <Route exact path='/accounts'>      
        <AccountsPage />
     </Route>  

     <Route exact path='/transactions'>      
     <TransactionsPage />
     </Route>  
     <Route exact path='/accounts/create'>      
    <CreateAccountPage />    
</Route>  
<Route exact path='/accounts/view'>      
    <ViewAccountPage />    
</Route>  
<Route exact path='/accounts/viewall'>      
    <ViewAllAccountsPage />    
</Route>  

<Route exact path='/accounts/delete'>      
    <DeleteAccountPage />    
</Route>  
<Route exact path='/accounts/withdraw'>      
    <UpdateAccountPage />    
</Route>  
    
     </Router>
    </div>
  );
}

export default App;
