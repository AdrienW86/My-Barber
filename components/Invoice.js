import React from 'react'
import styles from './styles/invoice.module.css'

 const Invoice = () => {
  return (
   <section className={styles.invoice_container}>
     <h2 className={styles.h2}> Votre commande</h2>

        <div className={styles.card}>
            <div className={styles.card_header}>
                <h3 className={styles.h3}> Coupe de cheveux </h3>
            </div>
            <div className={styles.card_body}>
                
                <p className={styles.date}> vendredi 14 mai 2023  </p>

                <p className={styles.price}> Total : 25€ </p>               
            </div>
            <button className={styles.btn}> Valider </button>
        </div>
   </section>
  )
}
export default Invoice