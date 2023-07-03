'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import ReservedCard from '@/components/ReservedCard'
import React, { useState , useEffect} from 'react'

const Reserve = () => {

  const [date, setDate] = useState()
  const [hour, setHour] = useState()

  useEffect(() => {
    setDate(localStorage.getItem('date'))
    setHour(localStorage.getItem('hour'))   
  }, []);

  return (
    <>
     <Nav />
      <main>
        <Title title = " Votre choix"/>
        <ReservedCard 
          date = {date}
          hour = {hour}
        />        
      </main>
     <Footer />
    </>
  )
}
export default Reserve