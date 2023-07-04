'use client'

import React, { useState } from 'react'
import { useThemeContext } from '../services/ThemeContextProvider'
import {useRouter} from 'next/navigation'
import Info from './Info'
import { data } from '@/app/data'
import ServicesCard from './ServicesCard'

const ReservedCard = (props) => {
  const {invoice, setInvoice } = useThemeContext()
  const router = useRouter()
   
  const reserved = (e) => {
    const invoice = {
      service: e.target.title,
      prix: e.target.value,
      date: props.date,
      hour: props.hour,
      created : new Date()
    } 
    setInvoice(invoice)
     //localStorage.clear()
     if(invoice.service === "Coupe de la barbe Homme") {
      router.push('https://buy.stripe.com/test_6oE8wN6FqeGI87u6oo')
     }
     if(invoice.service === "Coupe de cheveux Homme") {
      router.push('https://buy.stripe.com/test_dR67sJ2pabuw4Vi145')
     }
     if(invoice.service === "Coupe cheveux + barbe") {
      router.push('https://buy.stripe.com/test_3cs3ctaVG8ikfzWdQS')
     }   
     console.log(invoice.service)  
  } 
 
  return (
   <>
    <Info date = {props.date} hour = {props.hour} />
    <section>
    {data.map((el, index) =>  {
            return <ServicesCard 
              key = {index}
              title = {el.title}
              picture = {el.picture}
              description = {el.description}
              price = {el.price}
              btn = {reserved}
              rel="preload"
              as="style"
              onload="this.onload=null;this.rel='stylesheet'"
            />
        })}   
    </section>
   </>
  )
}
export default ReservedCard