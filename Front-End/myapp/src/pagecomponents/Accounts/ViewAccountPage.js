import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import ViewAccountPrompt from "../../prompts/Accounts/ViewAccountPrompt";
function ViewAccountPage() {
  return (
<body className="page">   
     <HEADING heading = 'View an account'/>
     <ViewAccountPrompt />
     <BackComponent name='accounts' display = 'Accounts'/>
</body>

  );
}
export default ViewAccountPage;