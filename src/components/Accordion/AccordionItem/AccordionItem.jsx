import React, { useState } from 'react'

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleAccordion = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      <div className="accordion-content">{isActive && <p>{content}</p>}</div>
    </div>
  )
}
export default AccordionItem
