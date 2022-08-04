import HEADING from "../extras/Header";
import BackComponent from "../extras/BackComponent";
import TransactionsPrompt from "../prompts/TransactionsPrompt"
function TransactionsPage() {
  return (
<body className="page">   
     <HEADING heading = 'Transactions'/>
     <TransactionsPrompt/>
     <BackComponent name='' display = 'Home'/>
</body>

  );
}
export default TransactionsPage;