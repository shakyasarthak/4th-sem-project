import React, { useState } from "react";
import CreateClass from "./CreateClass";
import Assignment from "./Assignment";
import Quiz from "./Quiz";

function TeacherDashboards() {
  const [classes, setClasses] = useState([]);

  const handleCreateClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  const handleDeleteClass = (classCodeToDelete) => {
    setClasses(classes.filter((classItem) => classItem.classCode !== classCodeToDelete));
  };

  const [selectedClass, setSelectedClass] = useState(null);

  const handleSelectClass = (classCode) => {
    setSelectedClass(classes.find((classItem) => classItem.classCode === classCode));
    
  };

  return (
    <div>
      <h2>Teacher Dashboard - Class List</h2>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setSelectedClass(null)}>
              View All Classes
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setSelectedClass("create")}>
              Create New Class
            </a>
          </li>
        </ul>
      </nav>
      <hr />
      {selectedClass === "create" && <CreateClass onCreateClass={handleCreateClass} />}
      {selectedClass && selectedClass !== "create" && (
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
          <button onClick={() => handleDeleteClass(selectedClass.classCode)}>Delete Class</button>
          <Assignment classCode={selectedClass.classCode}/>
            <Quiz classCode={selectedClass.classCode}/>
        </div>
      )}
      {!selectedClass && (
        <div>
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
                <button onClick={() => handleSelectClass(classItem.classCode)}>View Details</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TeacherDashboards;
