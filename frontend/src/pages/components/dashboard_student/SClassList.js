import React, { useState } from "react";
import EnrollClass from "./EnrollClass";
import Assignment from "./SAssignment";
import Quiz from "./SQuiz";

function SClassLists() {
  const [classes, setClasses] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedClass, setSelectedClass] = useState({});

  const handleEnrollClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  const handleDeleteClass = (classCodeToDelete) => {
    setClasses(classes.filter((classItem) => classItem.classCode !== classCodeToDelete));
  };

  const [showEnrollClass, setShowEnrollClass] = useState(false);

  const handleShowEnrollClass = () => {
    setShowEnrollClass(true);
  };
  const handleViewDetails = (classItem) => {
    setSelectedClass(classItem);
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
    setSelectedClass({});
  };

  return (
    <div>
      <h2>Student Dashboard - Class List</h2>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setShowDetails(false)}>
              View All Classes
            </a>
          </li>
          <li>
            <a href="#" onClick={handleShowEnrollClass}>
              Enroll in Class
            </a>
          </li>
        </ul>
      </nav>
      <hr />
      
      {showEnrollClass && <EnrollClass onEnrollClass={handleEnrollClass} />}
      {showDetails ? (
        <div>
          <h3>{selectedClass.className}</h3>
          <p>
            <strong>Subject: </strong>
            {selectedClass.subject}
          </p>
          <p>
            <strong>Description: </strong>
            {selectedClass.description}
          </p>
          <p>
            <strong>Class Code: </strong>
            {selectedClass.classCode}
          </p>
          <Assignment classCode={selectedClass.classCode} />
          <Quiz classCode={selectedClass.classCode} />
          <button onClick={handleHideDetails}>Back to Class List</button>
        </div>
      ) : (
        <div>
          <h3>Class List</h3>
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
                <button onClick={() => handleViewDetails(classItem)}>
                  View Details
                </button>
                <button onClick={() => handleDeleteClass(classItem.classCode)}>
                  Leave Class
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SClassLists;



