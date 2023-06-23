import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/card.module.css'

const ServicesCard = (props) => {
  return (
    <section className={styles.services_card}>
      <h3 className={styles.h3}> {props.title} </h3>           
        <div className={styles.header_card_services}>   
          <Image 
            src={props.picture} 
            width={150}
            height={150}
            alt="photo d'une prestation"
            className={styles.picture}
          />         
        </div>       
        <div className={styles.body_card_services}>        
          <p className={styles.description_card}> {props.description} </p>          
            <button 
              href={props.url}
              value={props.price}
              title={props.title}               
              className={styles.card_btn} 
              onClick={props.btn}> Réserver
            </button>
          <p className={styles.price}> {props.price} </p>
        </div> 
    </section>
  )
}
export default ServicesCard 