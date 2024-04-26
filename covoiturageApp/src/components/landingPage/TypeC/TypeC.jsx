import  './TypeC.css';
import '../Objectifs/Objectifs.css'
import Police from "../../../assets/Police.svg";
import IDK from "../../../assets/IDK.svg";
const TypeC=() =>{
    return (
    <section className='AccountTypeBoard'>
 <h1 id="logo">LOGO</h1>
<h2>Bienvenu à <h7>XOXO</h7></h2>
<p>Choisissez votre type de compte</p>

<div id='pp'>
<a href="/Conducteur">
<div className='Obj'>
    <img src={Police} alt="" />
  <h4>Conducteur</h4>
     <p>Proposez des trajets sécurisée, conviviaux, respectez horaires convenus.</p>
</div> </a>
<div className='Obj'>
    <img src={IDK} alt="" />
     <h4>Passager</h4>
     <p>Trouvez des trajets, communiquez, respectez horaires convenus, partagez les coûts.</p>
     </div></div>
    </section>
    );
   
  }
  export default TypeC;
