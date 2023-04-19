import React, { useState } from "react";

const SQuiz = ({ quizzes }) => {
  const [selectedQuizIndex, setSelectedQuizIndex] = useState(null);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleQuizSelect = (event) => {
    setSelectedQuizIndex(event.target.value);
    setSelectedQuizAnswer("");
    setShowResult(false);
  };

  const handleQuizAnswer = (event) => {
    setSelectedQuizAnswer(event.target.value);
  };

  const handleSubmitQuiz = (event) => {
    event.preventDefault();
    const selectedQuiz = quizzes[selectedQuizIndex];
    const isCorrect = selectedQuiz.answer.toLowerCase() === selectedQuizAnswer.toLowerCase();
    setShowResult(isCorrect);
  };

  return (
    <div>
      <h3>Quizzes</h3>
      <ul>
        {/* Display the list of quizzes */}
        {quizzes?.map((quiz, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="quiz"
                value={index}
                onChange={handleQuizSelect}
                required
              />
              Quiz {index + 1} - Deadline: {quiz.deadline}
            </label>
          </li>
        ))}
      </ul>
      {selectedQuizIndex !== null && (
        <div>
          <h4>Quiz {selectedQuizIndex + 1}</h4>
          <form onSubmit={handleSubmitQuiz}>
            <p>{quizzes[selectedQuizIndex].question}</p>
            <label>
              Your Answer:
              <input
                type="text"
                value={selectedQuizAnswer}
                onChange={handleQuizAnswer}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {showResult && (
            <p>
              Your answer is {quizzes[selectedQuizIndex].answer}.{" "}
              {quizzes[selectedQuizIndex].explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SQuiz;
