'use client'
import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Ce champ est requis'),
    email: Yup.string().email('Adresse e-mail invalide').required('Ce champ est requis'),
    message: Yup.string().required('Ce champ est requis')
  });

  const handleSubmit = (values, { resetForm }) => {
    // Envoyer les données du formulaire à une adresse e-mail
console.log(values)
    // Exemple d'utilisation de l'API Fetch pour envoyer les données
    fetch('./api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if (response.ok) {
          // Le formulaire a été soumis avec succès
          resetForm();
          alert('Votre message a été envoyé.');
        } else {
          // Une erreur s'est produite lors de l'envoi du formulaire
          alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
        }
      })
      .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      });
  };

  return (
   <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Nom:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="span" />
        </div>

        <button type="submit">Envoyer</button>
      </Form>
    </Formik>
    </>
  );
};

export default ContactForm;
