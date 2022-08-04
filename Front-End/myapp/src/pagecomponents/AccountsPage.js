import HEADING from "../extras/Header";
import BackComponent from "../extras/BackComponent";
import AccountsPrompt from "../prompts/AccountsPrompt";
function AccountsPage() {
    // window.location.reload();
  return (
<body className="page">   
     <HEADING heading = 'Accounts'/>
     <AccountsPrompt/>
     <BackComponent name='' display = 'Home'/>
</body>

  );
}
export default AccountsPage;