'use client'

import React from 'react'
import Title from './Title'
import UserForm from './UserForm'

 const SignCard = () => {
  return (
    <section style={{marginTop: "150px",display: "flex",
      flexDirection: "column", alignItems: "center"
    }}>
      <Title title = "Inscription"/>
      <UserForm btn ="Créer"/>
    </section>
  )
}
export default SignCard