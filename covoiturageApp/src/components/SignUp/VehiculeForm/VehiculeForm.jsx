import React from 'react';
import LogoImage from '../../../assets/LOGO.svg'; // Importer le logo
import './VehiculeForm.css'; // Assurez-vous de créer ce fichier CSS pour styliser le formulaire si nécessaire
import { Formik, Form, Field, ErrorMessage } from 'formik';
const VehiculeForm = ({ nextStep, prevStep }) => {
  const initialValues = {
    immatriculation: '',
    marque: '',
    annee: '',
    couleur: '',
    modele: '',
    permis: '',
    carteGrise: ''
  };

  const handleSubmit = (values, actions) => {
    // Traitez la soumission du formulaire ici
    console.log(values);
    // Passer à l'étape suivante
    nextStep();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="signup-container">
           <div className="logo-container">
              <img src={LogoImage} alt="Logo" className="logo" />
            </div>
          <div className="form-group">
            <label htmlFor="immatriculation" className="label">Numéro d'immatriculation</label>
            <Field type="text" id="immatriculation" name="immatriculation" />
            <ErrorMessage name="immatriculation" component="div" className="error-message" />
          </div>

        <div className='marque-annee'>
        <div className="form-group">
            <label htmlFor="marque" className="label">Marque</label>
            <Field type="text" id="marque" name="marque" />
            <ErrorMessage name="marque" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="annee" className="label">Année</label>
            <Field type="text" id="annee" name="annee" />
            <ErrorMessage name="annee" component="div" className="error-message" />
          </div>
        </div>
          
        <div className='couleur-modele'>
        <div className="form-group">
            <label htmlFor="couleur" className="label">Couleur</label>
            <Field type="text" id="couleur" name="couleur" />
            <ErrorMessage name="couleur" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="modele" className="label">Modèle</label>
            <Field type="text" id="modele" name="modele" />
            <ErrorMessage name="modele" component="div" className="error-message" />
          </div>
        </div>
         

          <div className="form-group">
            <label htmlFor="permis" className="label">Permis de conduire</label>
            <Field type="file" id="permis" name="permis" />
            <ErrorMessage name="permis" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="carteGrise" className="label">Carte grise</label>
            <Field type="file" id="carteGrise" name="carteGrise" />
            <ErrorMessage name="carteGrise" component="div" className="error-message" />
          </div>

          {/* Boutons "Suivant" et "Revenir" */}
          <div className="button-container">
            <button type="button" onClick={prevStep} className='btnR'>Revenir</button>
            <button type="submit" disabled={isSubmitting} className='btnE'>Enregister</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default VehiculeForm;

