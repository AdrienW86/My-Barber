import React from 'react'
import styles from './styles/btn_form.module.css'

function BtnFormik(props) {
  return (
   <button className={styles.btn}>
      {props.txt}
   </button>
  )
}
export default  BtnFormik