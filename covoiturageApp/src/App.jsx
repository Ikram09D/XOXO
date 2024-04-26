import LandingPage from "./components/LandingPage/LandingPage";
import Signup from "./components/SignUp/SingUp";
import CoordonneesForm from "./components/SignUp/CoordonneesForm/CoordonneesForm";
import './App.css';
import VehiculeForm from "./components/SignUp/VehiculeForm/VehiculeForm";
import InformationForm from "./components/SignUp/InformationForm/InformationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TypeC from "./components/LandingPage/TypeC/TypeC";
const App=() =>{
  
  return (
  <body>
   <BrowserRouter>
   <Routes>
    <Route index element={<LandingPage />}/>
    <Route path="/home" element={<LandingPage/>}/>
    <Route path="/Type" element={<TypeC />}/>
    <Route path="/inscriptionConducteur" element={<Signup />} />
    <Route path="/Conducteur" element={<InformationForm />} />
    <Route path="/Coordonnees" element={<CoordonneesForm></CoordonneesForm>}></Route>
    <Route path="/VehiculeF" element={<VehiculeForm />}></Route>

    </Routes>
    </BrowserRouter>
 

  

    </body>);
}

export default App;
