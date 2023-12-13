import React from 'react'
import styles from './InputField.module.scss'
import Input from '../../../components/Input/Input'

export const InputField = ({ inputTitle, value}) => {
  return (
    <div className={styles.container}>
      <h3>{inputTitle}</h3>
      <Input valueInput={value} name={inputTitle} />
    </div>
  )
}
