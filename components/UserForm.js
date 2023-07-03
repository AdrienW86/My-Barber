'use client'

import React from 'react'
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Title from './Title'
import styles from './styles/user_form.module.css'
import { useRouter } from 'next/navigation';

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

 const UserForm = (props) => {

    const router = useRouter()

    const handleSubmit = (values, { setSubmitting }) => {
     
      setTimeout(() => {
        alert(props.message + " " + values.name);
        setSubmitting(false);
      }, 500);
      router.push('/')
      localStorage.setItem("name", values.name)
      localStorage.setItem("isConnected", true)
      console.log(values)
    };

  return (
    <main>
       <Title title = {props.title}/>
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
              <label className={styles.label} htmlFor="name">Nom:</label>
              <Field type="text" id="name" name="name" placeholder="Votre nom" className={styles.input} autoComplete="name"/>
              <ErrorMessage  style={{ color: "red", textAlign: "center", margin: "10px 0" }} name="name" component="div" />
            </div>        
            <div className={styles.box} >
              <label className={styles.label} htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" placeholder="Votre adrese email" className={styles.input} autoComplete="email"/>
              <ErrorMessage style={{ color: "red", textAlign: "center", margin: "10px 0" }} name="email" component="div" />
            </div>
            <div className={styles.box}>
              <label className={styles.label} htmlFor="password">Mot de passe:</label>
              <Field type="password" id="password" name="password" placeholder="Votre mot de passe" className={styles.input} autoComplete="current-password"/>
              <ErrorMessage  style={{ color: "red", textAlign: "center", margin: "10px 0" }} name="password" component="div" />
            </div>
            <div className={styles.box}>
              <button className={styles.btn} type="submit" disabled={isSubmitting}>
               {props.btn}
              </button>
            </div>
          </Form>
        )}
      </Formik>        
    </main>
  )
}
export default UserForm