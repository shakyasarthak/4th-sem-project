// import React, { useState } from "react";

// function Quiz(classes) {
//   const [quizLink, setQuizLink] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleLinkChange = (event) => {
//     setQuizLink(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleSave = () => {
//     // Create a new quiz object with the quiz link and due date
//     const newQuiz = {
//       quizLink: quizLink,
//       dueDate: dueDate
//     };

//     // Pass the new quiz data to the parent component
//     props.onSave(newQuiz);

//     // Clear the input fields
//     setQuizLink("");
//     setDueDate("");
//   };

//   return (
//     <div>
//       <h2>Add a quiz</h2>
//       <form>
//         <label htmlFor="quizLink">Quiz link:</label>
//         <input type="text" id="quizLink" value={quizLink} onChange={handleLinkChange} />
//         <br />
//         <label htmlFor="dueDate">Due date:</label>
//         <input type="datetime-local" id="dueDate" value={dueDate} onChange={handleDateChange} />
//         <br />
//         <button type="button" onClick={handleSave}>
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Quiz;
import React, { useState } from 'react';

const Quizs = ({ classCode }) => {
  const [quizzes, setQuizzes] = useState([]);

  const handleAddQuiz = (quizLink, deadline) => {
    // Add the new quiz to the quizzes array
    setQuizzes([...quizzes, { quizLink, deadline }]);
  };

  return (
    <div>
      <h3>Quizzes</h3>
      <ul>
        {/* Display the list of quizzes */}
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <a href={quiz.quizLink} target="_blank" rel="noreferrer">
              Quiz {index + 1}
            </a>
            {' - '}
            Deadline: {quiz.deadline.toLocaleString()}
          </li>
        ))}
      </ul>
      {/* Form to add a new quiz */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const quizLink = event.target.elements.quizLink.value;
          const deadline = new Date(event.target.elements.deadline.value);
          handleAddQuiz(quizLink, deadline);
          event.target.reset();
        }}
      >
        <label>
          New Quiz Link:
          <input type="url" name="quizLink" required />
        </label>
        <label>
          Deadline:
          <input type="datetime-local" name="deadline" required />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Quizs;
