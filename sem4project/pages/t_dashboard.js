import React, { useState } from "react";
import { classes } from "../components/class";
import { Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import CreateClass from "./teacherCreateClass";
// import Assignment from "./teacherAssignment";
// import Quiz from "./teacherQuiz"
import { nanoid } from "nanoid";
import { assignments } from "@/components/assignment";
import AddClassForm from "./addClass";
import AddAssignmentForm1 from "./addAssignment1";
import AddQuizForm1 from "./addQuiz1";
import { quizs } from "@/components/quiz";
import { deleteClass } from "../components/class";
import "bootstrap/dist/css/bootstrap.min.css";
import y from "styles/s_dashboard.module.css";
import { getSession, useSession } from "next-auth/react";
import prisma from "./../prisma/prisma";

//get the server side prop
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/loginChoice",
        permanent: false,
      },
    };
  }
  const { user } = session;

  const status = await prisma.User.upsert({
    create: {
      email: user.email,
      role: user.email.endsWith("@gmail.com") ? "teacher" : "student",
    },
    update: {},
    where: { email: user.email || "" },
  });
  return {
    props: { status },
  };
}

function TeacherDashboards() {
  const [selectedClass, setSelectedClass] = useState(null);
  let [classes1, setClasses1] = useState(classes); // Initialize the state of `classes` with the `classes` array

  const handleDeleteClass = (classCodeToDelete) => {
    deleteClass(classCodeToDelete);
  };

  const handleSelectClass = (classCode) => {
    const selected = classes1.find(
      (classItem) => classItem.classCode === classCode
    );
    const selectedAssignments = assignments.filter(
      (assignment) => assignment.classCode === classCode
    );
    const selectedQuizs = quizs.filter((quiz) => quiz.classCode === classCode);
    setSelectedClass({
      ...selected,
      assignments: selectedAssignments,
      quizs: selectedQuizs,
    });
  };
  // setSelectedAssignment(assignments.find((assignmentItem) => assignmentItem.classCode===classCode));
  return (
    <div className={y.wrapper}>
      {/* <h2>Teacher Dashboard - Class List</h2> */}
      <hr />
      <div className={y.icon_container}>
        <nav>
          <ul className={y.classList}>
            <li>
              <div className={y.icon}>
                <a href="#" onClick={() => setSelectedClass(null)}>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip">View All Class</Tooltip>}
                  >
                    <i
                      class="bi bi-view-stacked h4"
                      style={{ color: "black" }}
                    ></i>
                  </OverlayTrigger>
                </a>
              </div>
            </li>
            <li>
              <div className={y.a_icon}>
                <a href="#" onClick={() => setSelectedClass("create")}>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip">Create New Class</Tooltip>}
                  >
                    <i class="bi bi-plus-lg h4" style={{ color: "black" }} />
                  </OverlayTrigger>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {selectedClass === "create" && <AddClassForm />}
      {selectedClass && selectedClass !== "create" && (
        <div className={y.box}>
          <div className={y.box_header}>
            <div className={y.Class_box}>
              <h3
                style={{
                  color: "midnightblue",
                  fontSize: "48px",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                  opacity: "textOpacity",
                  transform: "textTransform",
                  transition: "all 0.5s ease-out",
                }}
              >
                {selectedClass.className}
              </h3>

              <div className={y.subject}>
                <p>
                  <h1>{selectedClass.subject}</h1>
                </p>
              </div>
              <div className={y.description}>
                <p>
                  <strong>Description: </strong>
                  {selectedClass.description}
                </p>
              </div>
              <div className={y.classCode}>
                <p>
                  <strong>Class Code: </strong>
                  {selectedClass.classCode}
                </p>
              </div>
            </div>
          </div>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h4>Assignments</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h4>Assignments are not fun!!</h4>
                  <ul class="list-group">
                    {selectedClass.assignments.map((assignment) => (
                      <li class="list-group-item" key={assignment.id}>
                        {assignment.title}
                        {assignment.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#CollapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h4>Quizzes</h4>
                </button>
              </h2>
              <div
                id="CollapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h4>Quizzes are fun!!</h4>
                  <ul class="list-group">
                    {selectedClass.quizs.map((quiz) => (
                      <li class="list-group-item" key={quiz.id}>
                        <h6>
                          {quiz.subjectCode} - {quiz.subjectName}
                        </h6>
                        <p>
                          Link: <a href={quiz.link}>{quiz.description} </a>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <h4>Assignment</h4>

            <ul class="list-group">
              {selectedClass.assignments.map((assignment) => (
                <li class="list-group-item" key={assignment.id}>
                  {assignment.title}
                  {assignment.description}
                </li>
              ))}
            </ul>

            
            <h4>Quizzes</h4>
            
           */}
          <div className={y.test}>
            <nav>
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item">
                  <a
                    class="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Add Assignment
                  </a>
                </li>
                <li class="list-group-item">
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample2"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Add Quiz
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <AddAssignmentForm1 classCode={selectedClass.classCode} />
            </div>
          </div>

          <div class="collapse" id="collapseExample2">
            <div class="card card-body">
              <AddQuizForm1 classCode={selectedClass.classCode} />
            </div>
          </div>

          <hr />
          <div className={y.d_icon_container}>
            <div className={y.d_icon}>
              <a
                href="#"
                onClick={() => handleDeleteClass(selectedClass.classCode)}
              >
                <i class="bi bi-trash3 h3" style={{ color: "black" }}></i>
              </a>
            </div>
          </div>

          {/* {selectedClass.action === "assignment" && (
            <AddAssignmentForm1 classCode={selectedClass.classCode} />
          )}


          {selectedClass.action === "quiz" && (
            <AddQuizForm1 classCode={selectedClass.classCode} />
          )} */}
        </div>
      )}
      {!selectedClass && (
        <div className={y.box}>
          <div className={y.box_header}>
            <h3
              style={{
                color: "midnightblue",
                fontSize: "48px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                opacity: "textOpacity",
                transform: "textTransform",
                transition: "all 0.5s ease-out",
              }}
            >
              My Classes
            </h3>
            <ul>
              {classes.map((classItem) => (
                <div className={y.class_box} key={classItem.classCode}>
                  <h4>{classItem.className}</h4>
                  <div className={y.subject}>
                    <h1>{classItem.subject}</h1>
                  </div>
                  <div className={y.description}>
                    <p>
                      <strong>Description: </strong>
                      {classItem.description}
                    </p>
                  </div>
                  <div className={y.classCode}>
                    <p>
                      <strong>ClassCode: </strong>
                      {classItem.classCode}
                    </p>
                  </div>
                  <button
                    onClick={() => handleSelectClass(classItem.classCode)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default TeacherDashboards;
