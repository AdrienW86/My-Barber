'use client'

import Link from 'next/link';
import React,{ useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/nav.module.css'
import Hamburger from './Hamburger';
import Logo from '../assets/logo.png'
import Log from '../assets/on.svg'

const Nav = () =>  {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
        setIsMenuOpen(false); // Ferme le menu si la fenêtre dépasse la limite de réactivité
      }
    };
  // Écoute les événements de redimensionnement de la fenêtre
  window.addEventListener('resize', handleResize);

  // Vérifie la taille de l'écran lors du chargement initial
  handleResize();

  // Nettoie les écouteurs d'événements lorsque le composant est démonté
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
   <nav className={styles.nav}>
      <ul className={styles.log}>    
        <li> 
          <Link href='/sign' className={styles.start}> 
            <Image 
              src={Log}
              width={!isResponsive ? 60 : 30}
              height={!isResponsive ? 60 : 30}
              alt='icône pour se connecter/déconnecter'
              priority
            /> 
          </Link>
        </li>
    </ul> 
      <div className={styles.logo_container}>
      <Link href='/' className={styles.logo}>
        <Image          
          src={Logo}
          width={100}
          height={100}
          alt='logo du site'
          priority
        />
      </Link>      
      </div>
      {!isResponsive
      ? 
        <ul className={styles.ul_link}>
          <li className={styles.link}> <Link href='/services'> Services </Link></li>
          <li className={styles.link}> <Link href='/reserve'> Réservations </Link></li>
        </ul> 
      : <Hamburger /> }      
   </nav>
  )
}

export default Nav
