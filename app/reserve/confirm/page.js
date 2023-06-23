'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import ReservedCard from '@/components/ReservedCard'



const Reserve = () => {

  

    const date = localStorage.getItem('date')
    const hour = localStorage.getItem('hour')

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