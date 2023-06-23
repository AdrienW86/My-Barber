'use client'

import React, { useState } from 'react'


import { data } from '@/app/data'
import ServicesCard from './ServicesCard'
import styles from './styles/reserved.module.css'

const ReservedCard = (props) => {
    const [ticket, setTicket] = useState({})
   
    const reserved = (e) => {
        console.log(e.target)
        const invoice = {
            service: e.target.title,
            prix: e.target.value,
            date: props.date,
            hour: props.hour,
            created : new Date()
        } 
     setTicket(invoice)
     console.log(e.target.value)
     
   } 
   console.table(ticket)

  return (
   <>
    <p> Vous avez réservé le {props.date} pour {props.hour} </p>
    <p> Pour quel service souhaiteriez-vous réserver ?</p>
    <section className={styles.card}>
    {data.map((el, index) =>  {
            return <ServicesCard 
              key = {index}
              title = {el.title}
              picture = {el.picture}
              description = {el.description}
              price = {el.price}
              btn = {reserved}
              url='/reserve/validate'
            />
        })}   
    </section>
   </>
  )
}
export default ReservedCard