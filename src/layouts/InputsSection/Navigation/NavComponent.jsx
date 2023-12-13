import React from 'react'
import PierogIcon from '@icons/Pierog.svg?react'
import Button from '../../../components/Button/Button'
import { useSelector, useDispatch } from 'react-redux';
import { inputsActions } from '../../../store/index';
export const NavComponent = ({ title }) => {
  const dispatch = useDispatch();
  const handleClick = () =>{
  dispatch(inputsActions.getItems())
  }
  const handleClickRegenarate = () =>{
    dispatch(inputsActions.regenarateItems())
    }
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 16px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <PierogIcon />
        <h2 style={{ paddingLeft: '8px' }}>{title}</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button ><span onClick={handleClickRegenarate}>Regenerate</span></Button>
        <Button ><span onClick={handleClick}>Generuj</span></Button>
      </div>
    </nav>
  )
}
