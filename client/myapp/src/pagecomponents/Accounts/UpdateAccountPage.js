import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import UpdateAccountPrompt from "../../prompts/Accounts/UpdateAccountPrompt";
function UpdateAccountPage() {
  return (
<body className="page">   
     <HEADING heading = 'Withdraw Money'/>
     <UpdateAccountPrompt     />
     <BackComponent name='accounts' display = 'Accounts'/>
</body>

  );
}
export default UpdateAccountPage;