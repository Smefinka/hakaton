import styles from './ButtonLock.module.scss'
import React, { useState } from 'react'
import LockIcon from '@icons/Lock.svg?react'
import UnLockIcon from '@icons/UnLock.svg?react'
import { inputsActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';

function ToggleButton({name}) {
  const dispatch = useDispatch();
  //const stateLocked = useSelector(state => state.inputs.buttonLock);
  const [isLocked, setIsLocked] = useState(true)

  const handleClick = () => {
    setIsLocked(!isLocked)
if(isLocked){
  console.log('lock!')
  console.log({name})
  //при этом движение мы не добавляем именно это значение только другие
  // так же это происходит при первом раз тоесть пока этот массив shallow пуст
  
  dispatch(inputsActions.setIsInputsLocked({name}))
}else{
  //дальше происходит след если элемент есть нам надо его удалить
  console.log('unlock!')
  dispatch(inputsActions.setIsInputsUnLocked({name}))
  console.log({name})
}


 //  dispatch(inputsActions.setIsInputsLocked({name}))
    
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {isLocked ? <UnLockIcon /> : <LockIcon />}
    </button>
  )
}

export default ToggleButton
