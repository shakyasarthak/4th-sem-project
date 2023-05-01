import React, { useState } from "react";
import { enclasses } from "@/components/enrolled_class";
import Sub_assignment from "./submit_assignment";
import { assignments } from "@/components/assignment";
import AddEnroll from "./addEnroll";

const StudentDashboard = ()=> {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSelectClass = (classCode) => {
    const selected = enclasses.find((classItem) => classItem.classCode === classCode);
    const selectedAssignments = assignments.filter((assignment) => assignment.classCode === classCode);
    setSelectedClass({...selected, assignments:selectedAssignments});
  };

  return (
    <div>
      <h2>Student Dashboard - Class List</h2>
      <hr />
       
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setSelectedClass(null)}>
              View All Enrolled Class
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setSelectedClass("enroll")}>
              Enroll New Class
            </a>
          </li>
        </ul>
      </nav>
      {selectedClass === "enroll" && <AddEnroll />}
      {!selectedClass && (
        <div>
          <h3>My Classes</h3>
          <ul>
            {enclasses.map((classItem) => (
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
                  <strong>ClassCode: </strong>
                  {classItem.classCode}
                </p>
                <button onClick={() => handleSelectClass(classItem.classCode)}>View Details</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedClass &&  selectedClass!=="enroll" &&(
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
          <ul>
            <h4>Assignments</h4>
            {selectedClass.assignments.map((assignment) => (
              <li key={assignment.id}>
                {assignment.title}
                {assignment.description}
                <Sub_assignment
                  classCode={selectedClass.classCode}
                  assignmentId={assignment.id}
                />
              </li>
            ))}
          </ul>

          <hr />

          <button onClick={() => setSelectedClass(null)}>
            Back to Class List
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
