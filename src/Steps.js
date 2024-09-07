import React, { useState } from 'react'
import Count from './Count'
const messages = ['Learn React', 'Apply for Jobs', 'Invest your new income']
const App = () => {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, messages.length))
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>
        {' '}
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>

            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
          <p className='message'>
            step {step}:{messages[step - 1]}
          </p>
          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7590f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: '#7590f2', color: '#fff' }}
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
      <Count />
    </>
  )
}

export default App
