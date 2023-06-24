'use client'

import { useState } from 'react'
import { useThemeContext } from '../services/ThemeContextProvider'
import styles from './styles/invoice.module.css'

 const Invoice = () => {

  const [ toggle, setToggle ] = useState(false)
  const { invoice, setInvoice} = useThemeContext()
  console.log(invoice)

  const createBills = () => {
    
  }

  return (
   <section className={styles.invoice_container}>
     <h2 className={styles.h2}> Votre commande</h2>
        <div className={styles.card}>
            <div className={styles.card_header}>
                <h3 className={styles.h3}> {invoice.service} </h3>
            </div>
            <div className={styles.card_body}>               
                <p className={styles.date}> {invoice.date} </p>
                <p className={styles.hour}> {invoice.hour}  </p>
                <p className={styles.price}> {invoice.prix
                } </p>               
            </div>
            <button className={styles.btn} onClick={createBills}> Valider </button>
        </div>
   </section>
  )
}
export default Invoice