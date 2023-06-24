import React from 'react'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import Invoice from '@/components/Invoice'
import Footer from '@/components/Footer'


const Validate = () => { 
  return (
    <>
      <Nav />
      <main>
        <section>
          <Title title = "Validation"/>
          <Invoice />        
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Validate