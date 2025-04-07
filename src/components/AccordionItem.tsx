import React, { useState } from 'react'
import { PlusIcon, MinusIcon } from 'lucide-react'
interface AccordionItemProps {
  question: string
  answer: string | JSX.Element
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b border-gray-700/50 ">
      

      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="text-[#08183e] text-xl font-popins font-bold">{question}</span>
        <span className="flex-shrink-0 ml-4">
          {isOpen ? (
            <MinusIcon className="w-5 h-5 text-[#08183e] " />
          ) : (
            <PlusIcon className="w-5 h-5 text-[#08183e] " />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  )
}
export default AccordionItem
