'use client'

import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import { data } from '@/app/data'
import ServicesCard from './ServicesCard'

const ReservedCard = (props) => {
    const [ticket, setTicket] = useState({})

  const router = useRouter()
   
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
     router.push('/reserve/validate')
     console.log(e.target.value)
     
   } 
   console.table(ticket)

  return (
   <>
    <p> Vous avez réservé le {props.date} pour {props.hour} </p>
    <p> Pour quel service souhaiteriez-vous réserver ?</p>
    <section>
    {data.map((el, index) =>  {
            return <ServicesCard 
              key = {index}
              title = {el.title}
              picture = {el.picture}
              description = {el.description}
              price = {el.price}
              btn = {reserved}
            />
        })}   
    </section>
   </>
  )
}
export default ReservedCard