import { useEffect } from 'react';
import './App.css';
import HomePage from './pagecomponents/homePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AccountsPage from './pagecomponents/AccountsPage';
import TransactionsPage from './pagecomponents/TransactionsPage';
import CreateAccountPage from './pagecomponents/CreateAccountPage';
import ViewAccountPage from './pagecomponents/ViewAccountPage';
import ViewAllAccountsPage from './pagecomponents/ViewAllAccountsPage';
import DeleteAccountPage from './pagecomponents/DeleteAccountPage';
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
    
     </Router>
    </div>
  );
}

export default App;
