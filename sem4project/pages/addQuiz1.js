import { useState } from "react";
import { nanoid } from "nanoid";
import { quizs } from "../components/quiz";
import React from "react";
import { GlobalStyle } from "@/components/Wrap";
import ViewAllQuiz from "../components/viewallQuiz";

const AddQuizForm1 = ({ classCode }) => {
  const [formQuiz, setFormQuiz] = useState({
    classCode: classCode,
    subjectName: "",
    subjectCode: "",
    link: "",
    description: "",
  });
  const [showForm4, setShowForm4] = useState(false);

  function handleInputChange1(event) {
    setFormQuiz({
      ...formQuiz,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit1(event) {
    event.preventDefault();

    const newQuiz = {
      id: nanoid(),
      classCode: classCode,
      ...formQuiz,
    };
    quizs.push(newQuiz);
    setFormQuiz({
      classCode: classCode,
      subjectName: "",
      subjectCode: "",
      link: "",
      description: "",
    });
    setShowForm4(false);
  }

  return (
    <>
      <GlobalStyle />
      <section className="quiz quiz-small">
        {/* <h1> Quiz </h1> */}
        <div>
          <button
            type="button"
            class="btn btn-outline-primary"
           
            onClick={() => setShowForm4(true)}
          >
            <i class="bi bi-plus-lg"></i>Add Quiz
          </button>
          {showForm4 && (
            <div className="form-container">
              <form onSubmit={handleSubmit1} className="setup-form">
                <div className="form-floating mb-3 mt-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    value={classCode}
                    readOnly
                  />
                  <label>Class Code:</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Subject"
                    value={formQuiz.subjectName}
                    onChange={handleInputChange1}
                  />
                  <label for="floatingInput">Subject</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="SubjectCode"
                    value={formQuiz.subjectCode}
                    onChange={handleInputChange1}
                  />
                  <label for="floatingInput">Subject Code</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Year"
                    value={formQuiz.year}
                    onChange={handleInputChange1}
                  />
                  <label for="floatingInput">Year</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="url"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Link"
                    value={formQuiz.link}
                    onChange={handleInputChange1}
                  />
                  <label for="floatingInput">Link</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Description"
                    value={formQuiz.description}
                    onChange={handleInputChange1}
                  />
                  <label for="floatingInput">Description</label>
                </div>
                <button
                  class="btn btn-outline-primary"
                  type="submit"
                 
                >
                  Add
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      <div className="container">
        <ViewAllQuiz />
      </div>
    </>
  );
};

export default AddQuizForm1;
