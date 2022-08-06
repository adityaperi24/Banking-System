import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import AccountsPrompt from "../../prompts/Accounts/AccountsPrompt";
import CreateAccountPrompt from "../../prompts/Accounts/createAccountPrompt";
function CreateAccountPage() {
  return (
<body className="page">   
     <HEADING heading = 'Create an account'/>
     <CreateAccountPrompt />
     <BackComponent name='accounts' display = 'Accounts'/>
</body>

  );
}
export default CreateAccountPage;