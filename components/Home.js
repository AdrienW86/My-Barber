'use client'

import React , { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './styles/home.module.css'




 const Profil = () => {

    const [name, setName] = useState(null)
    let valeur
    useEffect(() => {
        
    
        // Récupération d'une valeur depuis le localStorage
        valeur = localStorage.getItem('name');
        setName(valeur);
    
      
      }, []);

  return (
    <section className={styles.home}>
        <h1 className={styles.h1}> Bienvenue 
            <span className={styles.name}> {name} </span>
        </h1>
        <section className={styles.intro}> 
            <h2 className={styles.h2_title}> Accueil </h2>
            <article className={styles.article}>
                <p className={styles.text_banner}> Votre salon My Barber vous accueille
                    <br/> du lundi au samedi de 9h à 19h.
                </p>
                <p className={styles.text_banner}>Nos prestations sont réalisées avec 
                    grand soin par notre équipe de professionnel dévouée et qualifiée 
                </p>
            </article>
            <Link className={styles.btn} href='/reserve'> Réserver </Link>
            <article className={styles.hour}>
                <p className={styles.p}> Nous sommes ravis de vous accueillir </p>
                <p className={styles.p}> du lundi au samedi </p>
                <p className={styles.p}> de 9h à 19h </p>
            </article>           
        </section>
    </section>
  )
}
export default Profil
