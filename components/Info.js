import React from 'react'
import styles from './styles/info.module.css'

export default function Info(props) {
  return (
  <>
    <p className={styles.date}> Vous avez choisi <br/> le {props.date} <br/> pour {props.hour} </p>
    <p className={styles.question}> Pour quel service souhaiteriez-vous réserver ?</p>
  </>
  )
}
