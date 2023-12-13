import { useState, useEffect } from 'react'
import useChatGPT from '../../hooks/useGenerate'
import styles from './Input.module.scss'
import ButtonLock from '../ButtonLock/ButtonLock'

function Input({ name, valueInput }) {
  const [value, setValue] = useState('wpisz, wygeneruj  lub zostaw puste')
  const { generatedText, generateDough } = useChatGPT()

  // useEffect(() => {
  //   generateDough({ name })
  //   console.log(generatedText)
  // }, [])
useEffect(()=> {
  setValue(valueInput)
}, [valueInput] )

  const handleInputOnChange = (e) => {
    setValue(e.target.value)
  }
  const handleInputOnClick = (e) => {
    setValue('')
  }

  return (
    <div className={styles.input_container}>
      <ButtonLock name={name} />
      <input
        type="text"
        id="uname "
        name="name"
        value={value}
        onChange={handleInputOnChange}
        onClick={handleInputOnClick}
      />
    </div>
  )
}
export default Input
