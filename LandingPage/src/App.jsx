import LandingPage from "./components/hero/landingpage";
import Headd from "./components/header/Headd"
import './App.css';
import Services from "./components/Services/Services";
import Objectifs from "./components/Objectifs/Objectifs";
import Target from "./components/Target/Target";
import FAQ from "./components/FAQ/faq"
const App=() =>{
  return (
  <body>
    <Headd />
    <LandingPage />
    <Services />
   <Objectifs />
   <Target />
   <FAQ />
    </body>);
}

export default App;