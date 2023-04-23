import React, { useState } from "react";
import CreateClass from "./teacherCreateClass";
import Assignment from "./teacherAssignment";
import Quiz from "./teacherQuiz"
import { nanoid } from 'nanoid';

function TeacherDashboards() {
  const [classes, setClasses] = useState([
    {
			id: nanoid(),
			className: 'Cs Batch 2020 MCSC 207' ,
      subject: 'Numerical Methods ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing el vehicula erra maximus.',
      classCode: 'nxfirhjdj45',
		},
    {
			id: nanoid(),
			className: 'Cs Batch 2021 MATH 207' ,
      subject: 'Statistics ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing el vehicula erra maximus.',
      classCode: 'hhgdjnh45',
		},
  ]);
   const [assignments,setAssignments] = useState([
    
    {
      id:nanoid(),
      title: "Assignment 3",
       description :"lorem oremh  dygbeyd gdyeg",
      deadline: "2023-05-15T23:59",
      classCode:"t24tbirc"
    },
    {
      id:nanoid(),
      title: "Assignment 1",
      description:"loerrk dhge ugr hdfguf uerh",
      // file: "https://example.com/assignment1.docx",
      deadline: "2023-05-03T23:59",
      classCode: "hhgdjnh45",
    },
    ]);
   const [quizs,setQuiz]=useState([
    {
      id:nanoid(),
      title: "Math Quiz",
      // duedate: "2023-05-01T23:59:59.999Z",
      quizLink: "https://example.com/math-quiz",
      classCode:"hhgdjnh45"
    },
    {
      id:nanoid(),
      title: "History Quiz",
      // duedate: "2023-05-15T23:59:59.999Z",
      quizLink: "https://example.com/history-quiz",
      classCode:"hhgdjnh45"
    },
    {
      id:nanoid(),
      title: "Science Quiz",
      // duedate: "2023-05-30T23:59:59.999Z",
      quizLink: "https://example.com/science-quiz",
      classCode:"nxfirhjdj45"
    },
   ]);

  const createClass = (className,subject,description,classCode) => {
    
    	const newClass = {
    		id: nanoid(),
    		className : className,
         subject : subject,
         description: description,
         classCode: classCode 
        };
        const newClasses =[...classes,newClass]
      setClasses(newClasses)
    };

  const handleDeleteClass = (classCodeToDelete) => {
    setClasses(classes.filter((classItem) => classItem.classCode !== classCodeToDelete));
  };
  const createAssignment= (title,description,date,classCode) => {
    
    const newAssignment = {
      id:nanoid(),
      title: title,
      description:description,
      // file:file,
      date: date,
      classCode:classCode
      };
      const newAssignments =[...assignments,newAssignment]
    setAssignments(newAssignments)
  };
  const createQuiz= (title,quizlink,classCode) => {
    
    const newQuiz= {
      id:nanoid(),
      title: title,
      // duedate:duedate,
      // file:file,
      quizlink:quizlink,
      classCode:classCode
      };
      const newQuizs =[...quizs,newQuiz]
    setQuiz(newQuizs)
  };

  const [selectedClass, setSelectedClass] = useState(null);
  // const [selectedAssignment, setSelectedAssignment] = useState(null);
  const handleSelectClass = (classCode) => {
    const selected = classes.find((classItem) => classItem.classCode === classCode);
    const selectedAssignments = assignments.filter((assignment) => assignment.classCode === classCode);
    const selectedQuizs = quizs.filter((quiz) => quiz.classCode === classCode);
    setSelectedClass({...selected, assignments: selectedAssignments, quizs:selectedQuizs});
  };
  // setSelectedAssignment(assignments.find((assignmentItem) => assignmentItem.classCode===classCode));
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
     
      {selectedClass === "create" && <CreateClass onCreateClass={createClass} />}
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
          <ul>
            <h4>Assignments</h4>
            {selectedClass.assignments.map((assignment) => (
              <li key={assignment.id}>
                {assignment.title}
               {assignment.description}
               {/* {assignment.deadline && (
                <span>Deadline: {assignment.deadline}</span>
              )} */}
              </li>
            ))}
          
          </ul>
          <ul>
          <h4>Quizs</h4>
          <li>
              {selectedClass.quizs.map((quiz) => (
              <li key={quiz.id}>
               
                {/* <a href={quiz.quizLink} target="_blank" rel="noreferrer">
                  Quiz 
                </a>
               {' - '}
                Deadline: {quiz.duedate.toLocaleString()} */}
                <a href="quiz.quizlink"> {quiz.title}</a>
              </li>
            ))}
            </li>
            </ul>
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
          
          <button onClick={() => handleDeleteClass(selectedClass.classCode)}>Delete Class</button>
          
       
          {selectedClass.action === "assignment" && <Assignment classCode={selectedClass.classCode} onCreateAssignment={createAssignment} />}
          {selectedClass.action === "quiz" && <Quiz classCode={selectedClass.classCode} onCreateQuiz={createQuiz}/>}
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
                  <strong>ClassCode: </strong>
                  {classItem.classCode}
                </p>
                <button onClick={() => handleSelectClass(classItem.classCode)}>View Details</button>
              </li>
            ))}
          </ul>
          <ul>
          </ul>
        </div>
      )}
    </div>
  );
}
export default TeacherDashboards;