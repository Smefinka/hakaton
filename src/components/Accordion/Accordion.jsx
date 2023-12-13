import React from 'react'
import AccordionItem from './AccordionItem/AccordionItem'

export const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem title="Section 1" content="Content for Section 1 " />
      <AccordionItem title="Section 2" content="Content for Section 2 " />
    </div>
  )
}
