import React from 'react';
import './StepBar.css'; // Assurez-vous d'avoir les styles CSS nécessaires pour la barre d'étapes
import { Formik, Form, Field, ErrorMessage } from 'formik';
const StepBar = ({ currentStep, accountType }) => {
  const shouldDisplayVehiculeStep = accountType === 'Conducteur';

  return (
    <div className="step-bar">
      <div className={`step-item ${currentStep >= 1 ? 'active' : ''}`}>
        <div className="step-circle">1</div>
        <div className="step-label">Choix</div>
      </div>
      <div className={`step-item ${currentStep >= 2 ? 'active' : ''}`}>
        <div className="step-circle">2</div>
        <div className="step-label">Information</div>
      </div>
      <div className={`step-item ${currentStep >= 3 ? 'active' : ''}`}>
        <div className="step-circle">3</div>
        <div className="step-label">Coordonnées</div>
      </div>
      {shouldDisplayVehiculeStep && (
        <div className={`step-item ${currentStep >= 4 ? 'active' : ''}`}>
          <div className="step-circle">4</div>
          <div className="step-label">Véhicule</div>
        </div>
      )}
    </div>
  );
};

export default StepBar;
