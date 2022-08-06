import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import ViewTransactionPrompt from "../../prompts/Transactions/ViewTransactionPrompt";
function ViewTransactionPage() {
  return (
<body className="page">   
     <HEADING heading = 'View a Transaction'/>
     <ViewTransactionPrompt />
     <BackComponent name='transactions' display = 'Transactions'/>
</body>

  );
}
export default ViewTransactionPage;