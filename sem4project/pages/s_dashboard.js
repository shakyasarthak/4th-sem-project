import React, { useState, useEffect } from "react";
import { Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { enclasses } from "@/components/enrolled_class";
import { std_assignments } from "@/components/std_assignment";
import Sub_assignment from "./submit_assignment";
import { assignments } from "@/components/assignment";
import AddEnroll from "./addEnroll";
import { quizs } from "@/components/quiz";
import { classes } from "@/components/class";
import { ST } from "next/dist/shared/lib/utils";
import "bootstrap/dist/css/bootstrap.min.css";
import y from "styles/s_dashboard.module.css";
import { getSession, useSession } from "next-auth/react";
import prisma from './../prisma/prisma';


//get the server side prop to create a student in the database
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
        redirect: {
            destination: '/loginChoice',
            permanent: false,
        },
    }
}
  const {user} = session;

  const status = await prisma.User.upsert({
    create: {
      email: user.email,
      role: user.email.endsWith("@student.ku.edu.np") ? "student" : "teacher",
    },
    update: {},
    where: {email: user.email || ""}
  });
  return {
    props: { status },
  };
}


const StudentDashboard = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSelectClass = (classCode) => {
    const selected = enclasses.find(
      (classItem) => classItem.classCode === classCode
    );
    const classDetails = classes.find(
      (classItem) => classItem.classCode === classCode
    );
    const selectedAssignments = assignments.filter(
      (assignment) => assignment.classCode === classCode
    );
    const selectedQuizs = quizs.filter((quiz) => quiz.classCode === classCode);
    setSelectedClass({
      ...selected,
      ...classDetails,
      assignments: selectedAssignments,
      quizs: selectedQuizs,
    });
  };

  const isAssignmentSubmitted = (classCode, assignmentId) => {
    return std_assignments.some(
      (submission) =>
        submission.classCode === classCode &&
        submission.assignmentId === assignmentId
    );
  };

  return (
    <div className={y.wrapper}>
      {/* <h2>Student Dashboard - Class List</h2> */}
      <hr />
      <div className={y.icon_container}>
        <nav>
          <ul className={y.classList}>
            <li>
              <div className={y.icon}>
                <a href="#" onClick={() => setSelectedClass(null)}>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="tooltip">View All Enrolled Class</Tooltip>
                    }
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
                <a href="#" onClick={() => setSelectedClass("enroll")}>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip">Enroll New Class</Tooltip>}
                  >
                    <i class="bi bi-plus-lg h4" style={{ color: "black" }}>
                      {/* Enroll New Class */}
                    </i>
                  </OverlayTrigger>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {selectedClass === "enroll" && <AddEnroll />}
      {!selectedClass && (
        <div className={y.box}>
          <div className={y.box_header}>
            <h3>My Classes</h3>
            <ul>
              {enclasses.map((classItem) => (
                <div className={y.class_box} key={classItem.classCode}>
                  <h4>{classItem.className}</h4>
                  <div className={y.subject}>
                    <h1>
                      {
                        classes.find((c) => c.classCode === classItem.classCode)
                          ?.subject
                      }
                    </h1>
                  </div>
                  <div className={y.description}>
                    <p>
                      <strong>Description: </strong>
                      {
                        classes.find((c) => c.classCode === classItem.classCode)
                          ?.description
                      }
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

      {selectedClass && selectedClass !== "enroll" && (
        <div className={y.box}>
          <div className={y.box_header}>
            <h3>{selectedClass.className}</h3>
            <div className={y.class_box}>
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
            </div>
          </div>

          <p>
          <button
              class="btn btn-primary"
              type="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => new bootstrap.Collapse("#collapseExample")}
            >
              Button with data-target
            </button>
            <button
              class="btn btn-primary"
              type="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => new bootstrap.Collapse("#collapseExample")}
            >
              Button with data-target
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
          {/* 
          <ul>
            <h4>Assignments</h4>
            {selectedClass.assignments.map((assignment) => (
              <li key={assignment.id}>
                {assignment.title}
                {assignment.description}
                {isAssignmentSubmitted(
                  selectedClass.classCode,
                  assignment.id
                ) ? (
                  <div>Status: Submitted</div>
                ) : (
                  <Sub_assignment
                    classCode={selectedClass.classCode}
                    assignmentId={assignment.id}
                  />
                )}
              </li>
            ))}
          </ul>

          <ul>
            <h4>Quizzes</h4>
            {selectedClass.quizs.map((quiz) => (
              <li key={quiz.id}>
               
                <p>
                  {quiz.description} Link: <a href={quiz.link}>{quiz.link} </a>
                </p>
              </li>
            ))}
          </ul>
           */}
          <hr />
          <div className={y.Icon_container}>
            <div className={y.icon}>
              <button onClick={() => setSelectedClass(null)}>
                <i class="bi bi-arrow-bar-left"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
