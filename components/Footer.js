import React from 'react';
import Image from 'next/image';
import Logo from '../assets/icon.png'
import styles from './styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image 
        src={Logo}
        width={100}
        height={80}
        alt='Logo My Barber'
        className={styles.logo}
      />
       
      <p className={styles.p}> My Barber </p>
    </footer>
  )
}
export default Footer