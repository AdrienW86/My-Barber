import { useState } from 'react';
import Link from 'next/link';
import styles from './styles/hamburger.module.css';

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.hamburger_container}>
        <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={handleMenuToggle}>
            <span className={styles.line}> </span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>

        {isMenuOpen && (
          <ul className={styles.menu}>
              <li className={styles.menu_link}><Link href='/services'> Services </Link>  </li>
              <li className={styles.menu_link}><Link href='/reserve'> Réservations</Link></li>
          </ul>
        )}
    </section>
  );
};
export default Hamburger;