'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Title from './Title'
import styles from './styles/user_form.module.css'

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
    // fetch('./api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(values)
    // })
    //   .then(response => {
    //     if (response.ok) {
          // Le formulaire a été soumis avec succès
          resetForm();
          alert('Votre message a été envoyé.');
        // } else {
        //   // Une erreur s'est produite lors de l'envoi du formulaire
        //   alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
        // }
      // })
      // .catch(error => {
      //   console.error('Erreur:', error);
      //   alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      // });
  };

  return (
   <main>
    <Title title = "Contact"/>
     <h3> Une question ? </h3>
     <p className={styles.p}>Nous nous engageons à vous répondre dans les meilleurs délais.</p>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.box}>
          <label className={styles.label} htmlFor="name">Nom:</label>
          <Field placeholder="Votre nom" className={styles.input} type="text" id="name" name="name" />
          <ErrorMessage style={{ color: "red", textAlign: "center", margin: "10px 0" }} name="name" component="span" />
        </div>

        <div className={styles.box}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <Field placeholder="Votre adresse email" className={styles.input} type="email" id="email" name="email" />
          <ErrorMessage style={{ color: "red", textAlign: "center", margin: "10px 0" }} name="email" component="span" />
        </div>

        <div className={styles.box}>
          <label className={styles.label}htmlFor="message">Message:</label>
          <Field placeholder="Votre message" className={styles.text} as="textarea" id="message" name="message" />
          <ErrorMessage style={{ color: "red", textAlign: "center", margin: "10px 0" }} name="message" component="span" />
        </div>
        <div className={styles.box}>
          <button className={styles.btn} type="submit">Envoyer</button>
        </div>
      </Form>
    </Formik>
    <p className={styles.contact}>06.00.00.00.00</p>
    <p className={styles.contact}>barber@exemple.com</p>
    </main>
  );
};

export default ContactForm;
