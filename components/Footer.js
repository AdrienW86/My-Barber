import React from 'react';
import Image from 'next/image';
import Logo from '../assets/icon.png'
import styles from './styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_container}>
        <Image 
          src={Logo}
          width={0}
          height={0}
          alt='Logo My Barber'
          className={styles.logo}
          style={{ width: '100%', height: '100%' }}
        />  
      </div>
      <p className={styles.p}> My Barber </p>
    </footer>
  )
}
export default Footer