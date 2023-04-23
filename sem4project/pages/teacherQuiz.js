import React, { useState } from "react";

function Quiz({classCode, onCreateQuiz}) {
  const [title, setTitle] = useState("");
  const [quizLink, setQuizLink] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const handleTitleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleLinkChange = (event) => {
    setQuizLink(event.target.value);
  };

  // const handleDuedateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleSave = () => {
    // Create a new quiz object with the quiz link and due date
    
    onCreateQuiz(title,quizLink,classCode);
    // Clear the input fields
    setTitle("");
    setQuizLink("");
    // setDueDate("");
  };

  return (
    <div>
      <h2>Add a quiz</h2>
      <form>
        <label>
          Title:
          <input type="text" name="title" required id="className" value={title} onChange={handleTitleChange}/>
        </label>
        <label >Quiz link:
        <input type="url" name="quizLink" required  id="quizLink" value={quizLink} onChange={handleLinkChange}/>
        </label>
        {/* <br />
        <label htmlFor="dueDate">Due date:</label>
        <input type="datetime-local" id="dueDate" value={dueDate} onChange={handleDuedateChange} />
        <br /> */}
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}

export default Quiz;