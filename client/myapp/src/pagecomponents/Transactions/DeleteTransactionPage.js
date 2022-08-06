import HEADING from "../../extras/Header";
import BackComponent from "../../extras/BackComponent";
import DeleteTransactionPrompt from "../../prompts/Transactions/DeleteTransactionPrompt";
function DeleteTransactionPage() {
  return (
<body className="page">   
     <HEADING heading = 'Delete an Transaction'/>
     <DeleteTransactionPrompt />
     <BackComponent name='transactions' display = 'Transactions'/>
</body>

  );
}
export default DeleteTransactionPage;