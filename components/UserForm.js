import React from 'react'
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './styles/sign.module.css'

const LoginSchema = Yup.object().shape({
    name: Yup.string().required('Le nom est requis'),
    password: Yup.string().required('Le mot de passe est requis'),
    email: Yup.string()
      .email('Email invalide')
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g,
        'Format d\'email incorrect'
      )
      .required('L\'email est requis'),
  });

export default function UserForm(props) {
    const handleSubmit = (values, { setSubmitting }) => {
    
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      };
  return (
    <div className={styles.sign}>
       <div className={styles.link_container}>
        <Link href='/login' className={styles.link}>  Connexion </Link>
         <span className={styles.span}> |</span> 
        <Link href='/sign' className={styles.link}>  S'inscrire </Link>
       </div>
        
         <Formik
          initialValues={{ name: '', password: '', email: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.box}>
              <label htmlFor="name">Nom:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage  style={{ color: "red", textAlign: "left", margin: "10px 0" }} name="name" component="div" />
            </div>
            <div className={styles.box}>
              <label htmlFor="password">Mot de passe:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage  style={{ color: "red", textAlign: "left", margin: "10px 0" }} name="password" component="div" />
            </div>
            <div className={styles.box} >
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage style={{ color: "red", textAlign: "left", margin: "10px 0" }} name="email" component="div" />
            </div>
            <div className={styles.box}>
              <button className={styles.btn} type="submit" disabled={isSubmitting}>
               {props.btn}
              </button>
            </div>
          </Form>
        )}
      </Formik>        
    </div>
  )
}
