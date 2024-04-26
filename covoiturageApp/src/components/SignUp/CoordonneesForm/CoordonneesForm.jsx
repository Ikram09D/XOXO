import React from 'react';
import LogoImage from '../../../assets/LOGO.svg'; // Importer le logo
import './CordonneesForm.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
const CoordonneesForm = ({ accountType, nextStep, prevStep }) => {
  const initialValues = {
    username: '',
    phone: '',
    smsCode: '',
    nationalId: '',
  };

  const handleSubmit = (values, actions) => {
    // Traitez la soumission du formulaire ici
    console.log(values);
    // Passer à l'étape suivante
    nextStep();
  };

let buttonLabel = "Suivant";
if (accountType === "Passager") {
  buttonLabel = "Enregistrer";
}


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="signup-container">
          <div className="logo-container">
            <img src={LogoImage} alt="Logo" className="logo" />
          </div>

          {/* Champs du formulaire */}
          <div className="form-group">
            <label htmlFor="username" className="label">Nom d'utilisateur</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="label">Numéro de téléphone</label>
            <Field type="tel" id="phone" name="phone" placeholder="+213" />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="smsCode" className="label">Code reçu par SMS</label>
            <Field type="text" id="smsCode" name="smsCode" />
            <ErrorMessage name="smsCode" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="nationalId" className="label">Carte nationale</label>
            <Field type="file" id="nationalId" name="nationalId" />
            <ErrorMessage name="nationalId" component="div" className="error-message" />
          </div>

          {/* Boutons "Suivant" et "Revenir" */}
          <div className="button-container">
            <a href="/Conducteur"><button type="button" onClick={prevStep} className='btnR'>Revenir</button></a>
            <a href="/VehiculeF"><button type="submit" disabled={isSubmitting}className='btnS btnE'>{buttonLabel}</button></a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CoordonneesForm;
