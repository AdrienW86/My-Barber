import React from 'react'
import styles from './styles/title.module.css'

const Title = (props) => {
  return (
   <h1 className={styles.h1}> {props.title}</h1>
  )
}
export default Title