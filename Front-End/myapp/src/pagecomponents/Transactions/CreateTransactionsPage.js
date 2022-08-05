import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import CreateTransactionPrompt from "../../prompts/Transactions/CreateTransactionPrompt";
function CreateTransactionsPage() {
  return (
<body className="page">   
     <HEADING heading = 'Create a Transaction'/>
     <CreateTransactionPrompt />
     <BackComponent name='transactions' display = 'Transactions'/>
</body>

  );
}
export default CreateTransactionsPage;