import { useState } from "react";
import { nanoid } from "nanoid";
import { assignments } from "../components/assignment";
import React from "react";
import { GlobalStyle } from "@/components/Wrap";

import y from "styles/s_dashboard.module.css";
import ViewAllAssigns from "../components/viewallAssignment";
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

const AddAssignmentForm1 = ({ classCode }) => {
  const [formAssignment, setFormAssignment] = useState({
    classCode: classCode,
    assignmentId: "",
    subjectName: "",
    subjectCode: "",
    year: "",
    link: "",
    deadline: "",
    description: "",
  });
  const [assignmentno, setAssignmentno] = useState("");
  const [showForm, setShowForm] = useState(false);

  function handleAssignmentnoChange(event) {
    setAssignmentno(event.target.value);
  }
  function handleInputChange(event) {
    setFormAssignment({
      ...formAssignment,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const assignno = classCode + "-" + assignmentno;
    const newAssignment = {
      assignmentId: assignno,
      ...formAssignment,
    };

    assignments.push(newAssignment);

    setFormAssignment({
      classCode: classCode,
      subjectName: "",
      subjectCode: "",
      year: "",
      link: "",
      deadline: "",
    });

    setShowForm(false);
  }

  return (
    <>
      <GlobalStyle />
      <section className="quiz quiz-small">
        {/* <h1>Assignment</h1> */}
        <div>
          <button
            type="button"
            class="btn btn-outline-primary"
           
            onClick={() => setShowForm(true)}
          >
            <i class="bi bi-plus-lg"></i> Assignment
          </button>
          {showForm && (
            <div className="form-container">
              <form onSubmit={handleSubmit} className="setup-form">
                <div className="form-floating mb-3 mt-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Enter Assignment No"
                    value={assignmentno}
                    onChange={handleAssignmentnoChange}
                    name= "assignmentId"
                  />
                  <label for="floatingInput">Assignment No</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    value={classCode}
                    readOnly
                    name= "classCode"
                  />
                  <label for="floatingInput">Class Code:</label>
                </div>

                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Subject"
                    value={formAssignment.subjectName}
                    onChange={handleInputChange}
                    name = "subjectName"
                  />
                  <label for="floatingInput">Subject</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Subject Code"
                    value={formAssignment.subjectCode}
                    onChange={handleInputChange}
                    name = "subjectCode"
                  />
                  <label for="floatingInput">Subject Code</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Year"
                    value={formAssignment.year}
                    onChange={handleInputChange}
                    name = "year"
                  />
                  <label for="floatingInput">Year</label>
                </div>
                <div className="form-floating mb-3 ">
                  <input
                    type="url"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Link"
                    value={formAssignment.link}
                    onChange={handleInputChange}
                    name="link"
                  />
                  <label for="floatingInput">Link</label>
                </div>
                <div className="form-floating mb-3 ">
                  <textarea
                    
                    class="form-control"
                    id="floatingInput"
                    placeholder="Description"
                    value={formAssignment.description}
                    onChange={handleInputChange}
                    name="description"
                  ></textarea>
                  <label for="floatingInput">Description</label>
                </div>
                <button
                  class="btn btn-outline-primary"
                  type="submit"
                  // onClick={() => handleSubmit()}
                >
                  Add
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      {/* <div className="container">
        <ViewAllAssigns/>
      </div> */}
    </>
  );
};

export default AddAssignmentForm1;
