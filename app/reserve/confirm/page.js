'use client'

import Title from '@/components/Title'
import ReservedCard from '@/components/ReservedCard'
import React, { useState , useEffect} from 'react'

const Reserve = () => {

  const [date, setDate] = useState()
  const [hour, setHour] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const reservedDate = localStorage.getItem('date')
      const reservedHour = localStorage.getItem('hour')
    
    setDate(reservedDate)
    setHour(reservedHour)  
    window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <main>
        <Title title = " Votre choix"/>
        <ReservedCard 
          date = {date}
          hour = {hour}
        />        
      </main> 
    </>
  )
}
export default Reserve