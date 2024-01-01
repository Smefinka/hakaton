import styles from './Input.module.scss'
import { useState } from 'react'
function InputDefault ({inputTitle, valueInput, onChange, blurName, id }){
  const [value, setValue] = useState(valueInput)
    const handleInputOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleInputOnClick = (e) => {
      setValue('')
    }
    const handleBlur = (e) => {
      const idRec = id;
      console.log(idRec)
      const objRec = {
        id: idRec,
        name: e.target.value
      }
      blurName(objRec)
      console.log('Компонент потерял фокус');
      console.log(e.target.value)
    };
    const container = {
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
        alignItems: 'flexStart',
        width: '343px'
      
    }

    return(
        <>
         <div style={container}>
             <h3>{inputTitle}</h3>
             <div className={styles.input_container}>
      <input
        type="text"
        id="uname"
        value={value}
        onChange={onChange ? handleInputOnChange : ''}
        onClick={onChange ? handleInputOnClick : ''}
        onBlur={handleBlur}
       />
    </div>
    </div>
        </>
    )
}
export default InputDefault;