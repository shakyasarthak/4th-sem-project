import React from 'react'
import {  useGlobalContext } from '@/components/context_q'


import Loading19 from '@/components/Loading_q'
import SetupForm19 from '@/components/SetupForm_q'
import Modal19 from '@/components/Modal_q'
import Wrapper19 from '@/assets/wrappers/Quizwrapper'
function Quiz19() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()
  if (waiting) {
    return <SetupForm19 />
  }
  if (loading) {
    return <Loading19 />
  }

  const { question, incorrect_answers, correct_answer } = questions[index]
  // const answers = [...incorrect_answers, correct_answer]
  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }
  return (
    
     <main>
      <Wrapper19>
      <Modal19 />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
      </Wrapper19>
      </main>
  

  )
}

export default Quiz19
