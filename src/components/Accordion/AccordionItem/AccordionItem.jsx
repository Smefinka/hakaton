import React, { useState, useEffect } from 'react'
import Arrow from '@icons/Arrow.svg?react'
import styles from './AccordionItem.module.scss'

const AccordionItem = ({ isAccordionOpen, title, sections }) => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (isAccordionOpen !== undefined) {
      setIsOpen(isAccordionOpen)
    }
  }, [isAccordionOpen])

  const handleSwitch = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={handleSwitch}>
        <h2 className={styles.sectionTitle}>{title}:</h2>
        <span className={isOpen ? styles.arrowDown : ''}>
          <Arrow />
        </span>
      </div>
      {isOpen &&
        sections.map((section, index) => (
          <div key={index} className={styles.sectionItems}>
            {section.name}: {section.quantity}
          </div>
        ))}
    </div>
  )
}
export default AccordionItem
