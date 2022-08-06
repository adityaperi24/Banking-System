import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import DeleteAccountPrompt from "../../prompts/Accounts/DeleteAccountPrompt";
function DeleteAccountPage() {
  return (
<body className="page">   
     <HEADING heading = 'Delete an account'/>
     <DeleteAccountPrompt />
     <BackComponent name='accounts' display = 'Accounts'/>
</body>

  );
}
export default DeleteAccountPage;