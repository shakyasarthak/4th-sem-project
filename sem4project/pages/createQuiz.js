import { useState } from 'react'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const questions = [
    {
      question: 'What is the capital of France?',
      options: [
        { answer: 'Paris', isCorrect: true },
        { answer: 'London', isCorrect: false },
        { answer: 'Berlin', isCorrect: false },
        { answer: 'Madrid', isCorrect: false },
      ],
    },
    {
      question: 'What is the highest mountain in the world?',
      options: [
        { answer: 'Mount Everest', isCorrect: true },
        { answer: 'K2', isCorrect: false },
        { answer: 'Kangchenjunga', isCorrect: false },
        { answer: 'Lhotse', isCorrect: false },
      ],
    },
  ]

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      // End of quiz
      alert(`You scored ${score} out of ${questions.length}`)
      setCurrentQuestion(0)
      setScore(0)
    }
  }

  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <h2>{questions[currentQuestion].question}</h2>
        <ul>
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index}>
              <button onClick={() => handleAnswer(option.isCorrect)}>
                {option.answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Quiz