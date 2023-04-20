// import React from "react";
// import ClassList from "./ClassList";

// function TeacherDashboard() {
//   return (
//     <div>
//       {/* <h2>Teacher Dashboard</h2>
//       <nav>
//         <ul>
//           <li>
//             <a href="#">Create New Class</a>
//           </li>
//           <li>
//             <a href="#">Add Assignment</a>
//           </li>
//           <li>
//             <a href="#">Add Quiz</a>
//           </li>
//         </ul>
//       </nav>
//       <hr /> */}
//       <ClassList />
//     </div>
//   );
// }

// export default TeacherDashboard;
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
          {/* <hr />
          <nav>
            <ul>
              <li>
                <a href="#" onClick={() => setSelectedClass({ ...selectedClass, action: "assignment" })}>
                  Add Assignment
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setSelectedClass({ ...selectedClass, action: "quiz" })}>
                  Add Quiz
                </a>
              </li>
            </ul>
          </nav>
          <hr />
          {selectedClass.action === "assignment" && <Assignment classCode={selectedClass.classCode} />}
          {selectedClass.action === "quiz" && <Quiz classCode={selectedClass.classCode} />} */}
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
