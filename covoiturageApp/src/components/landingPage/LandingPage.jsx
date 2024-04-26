import './LandingPage.css';
import Hero from './hero/Hero';
import Head from "./header/Headd"
import Services from "./Services/Services";
import Objectifs from "./Objectifs/Objectifs";
import Target from "./Target/Target";
import FAQ from "./FAQ/faq"

function LandingPage(){
  return (
    <body id='LandingPage'>
    <Head />
    <Hero />
    <Services />
   <Objectifs />
   <Target />
   <FAQ />
   </body>)

   
}

export default LandingPage;
