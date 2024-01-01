import React from 'react'
import PierogIcon from '@icons/Pierog.svg?react'
import styles from './NavComponent.module.scss'
import Loader from '../../../components/Loader/Loader'
export const NavComponent = ({
  title,
  onClickFunction,
  buttonText,
  isLoading,
}) => {
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
      {isLoading ? <Loader /> : null}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          className={styles.buttonHeader}
          onClick={onClickFunction}
          disabled={isLoading}
        >
          {buttonText}
        </button>
      </div>
    </nav>
  )
}
