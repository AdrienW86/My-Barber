'use client'

import React from 'react'
import Title from './Title'
import UserForm from './UserForm'

 const LogCard = () => {
  return (
    <section style={{marginTop: "150px",display: "flex",
      flexDirection: "column", alignItems: "center"
    }}>
      <Title title = "Connexion"/>
      <UserForm btn ="Se connecter"/>
    </section>
  )
}
export default LogCard