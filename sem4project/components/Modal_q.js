import React from 'react'
import { useGlobalContext } from './context_q'
import Wrapper19 from '@/assets/wrappers/Quizwrapper'

const Modal19 = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <Wrapper19>
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button className='close-btn' onClick={closeModal}>
          play again
        </button>
        <button className='close-btn' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
    </Wrapper19>
  )
}

export default Modal19
