
import HEADING from "../extras/Header";
import WelcomePrompt from "../prompts/WelcomePrompt";
import backComponent from "../extras/BackComponent";
function HomePage() {
  return (
 <div>
<body className="page">   
     <HEADING heading = 'BANKING SYSTEM APPLICATION'/>
     
     <WelcomePrompt/>
     
     
</body>
<backComponent name='accounts'/>
</div>
  );
}
export default HomePage;