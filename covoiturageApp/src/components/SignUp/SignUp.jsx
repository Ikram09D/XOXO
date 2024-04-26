import React, { useState } from 'react';
import Choix from './Choix/Choix';
import InformationForm from './InformationForm/InformationForm';
import CoordonneesForm from './CoordonneesForm/CoordonneesForm';
import VehiculeForm from './VehiculeForm/VehiculeForm';
import StepBar from './StepBar/StepBar'; // Importez le composant StepBar

function Signup() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChoice = (type) => {
    setAccountType(type);
    nextStep();
  };

  let content = null;
  if (step === 1) {
    content = <Choix nextStep={handleChoice} />;
  } else {
    const totalSteps = accountType === 'Conducteur' ? 4 : 3;

    switch (step) {
      case 2:
        content = <InformationForm nextStep={nextStep} prevStep={prevStep} />;
        break;
      case 3:
        content = <CoordonneesForm accountType={accountType} nextStep={nextStep} prevStep={prevStep} />;
        break;
      case 4:
        if (accountType === 'Conducteur') {
          content = <VehiculeForm nextStep={nextStep} prevStep={prevStep} />;
        }
        break;
      default:
        content = null;
        break;
    }

    return (
      <div className="App">
        {step > 1 && <StepBar currentStep={step} accountType={accountType} />} {/* Barre d'étapes */}
        <div className="content">
          {content}
        </div>
      </div>
    );
  }

  return <div className="App">{content}</div>;
}

export default Signup;
