import React from 'react'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

 const Contact = () => {
  return (
    <>
     <Nav />
      <main>
       
        <Title title = "Contact"/>
        <ContactForm />
        
      </main>
     <Footer />
    </>
  )
}
export default Contact