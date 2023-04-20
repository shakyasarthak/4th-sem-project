import React, { useState } from "react";
import CreateClass from "./CreateClass";
import Assignment from "./Assignment";
import Quiz from "./Quiz";

function ClassLists() {
  const [classes, setClasses] = useState([]);

  const handleCreateClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  const handleDeleteClass = (classCodeToDelete) => {
    setClasses(classes.filter((classItem) => classItem.classCode !== classCodeToDelete));
  };

  const [showCreateClass, setShowCreateClass] = useState(false);
  // const [showAssignment, setShowAssignment] = useState(false);
  // const [showQuiz, setShowQuiz] = useState(false);

  const handleShowCreateClass = () => {
    setShowCreateClass(true);
    setShowAssignment(false);
    setShowQuiz(false);
  };

  const handleShowAssignment = () => {
    setShowCreateClass(false);
    setShowAssignment(true);
    setShowQuiz(false);
  };

  const handleShowQuiz = () => {
    setShowCreateClass(false);
    setShowAssignment(false);
    setShowQuiz(true);
  };

  return (
    <div>
      <h2>Teacher Dashboard - Class List</h2>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={handleShowCreateClass}>
              Create New Class
            </a>
          </li>
          {/* <li>
            <a href="#" onClick={handleShowAssignment}>
              Add Assignment
            </a>
          </li>
          <li>
            <a href="#" onClick={handleShowQuiz}>
              Add Quiz
            </a>
          </li> */}
        </ul>
      </nav>
      <hr />
      {showCreateClass && <CreateClass onCreateClass={handleCreateClass} />}
      {/* {showAssignment && <Assignment classes={classes} />}
      {showQuiz && <Quiz classes={classes} />} */}
      <h3>My Classes</h3>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.classCode}>
            <h4>{classItem.className}</h4>
            <p>
              <strong>Subject: </strong>
              {classItem.subject}
            </p>
            <p>
              <strong>Description: </strong>
              {classItem.description}
            </p>
            <p>
              <strong>Class Code: </strong>
              {classItem.classCode}
            </p>
            
            <Assignment classCode={classItem.classCode}/>
            <Quiz classCode={classItem.classCode}/>
            <button onClick={() => handleDeleteClass(classItem.classCode)}>
              Delete Class
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassLists;
