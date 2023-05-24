import { useState } from "react";
import { nanoid } from "nanoid";
import { classes } from "../components/class";
import React from "react";
import { GlobalStyle } from "@/components/Wrap";
import ViewAllClass from "../components/viewallClass";
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

const AddClassForm = () => {
  const [formClass2, setFormClass2] = useState(classes);
  const [showForm2, setShowForm2] = useState(false);

  function handleInputChange2(event) {
    setFormClass2({
      ...formClass2,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit2(event) {
    event.preventDefault();

    const newClass = {
      id: nanoid(),
      ...formClass2,
    };
    classes.push(newClass);
    setFormClass2({
      className: "",
      subject: "",
      description: "",
      classCode: "",
    });

    setShowForm2(false);
  }

  return (
    <>
      <GlobalStyle />
      <section className="quiz quiz-small">
        <h1> Classes </h1>
        <div className="button-container">
          <button
            type="button"
            class="btn btn-outline-primary"
         
            onClick={() => setShowForm2(true)}
          >
            {" "}
            <i class="bi bi-plus-lg"></i>Add New Class
          </button>
          {showForm2 && (
            <div className="form-container">
              <form onSubmit={handleSubmit2} className="setup-form">
                <div className="form-floating mb-3 mt-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Enter New Class"
                    
                    value={formClass2.className}
                    onChange={handleInputChange2}
                    name="className"
                  />
                  <label for="floatingInput">ClassName</label>
                </div>
                <div className="form-floating mb-3 mt-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Enter New SubjectName"
                    value={formClass2.subject}
                    onChange={handleInputChange2}
                    name = "subject"
                  />
                  <label for="floatingInput">Subject</label>
                </div>
                <div className="form-floating mb-3 mt-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Enter Description"
                    value={formClass2.description}
                    onChange={handleInputChange2}
                    name = "description"
                  />
                  <label for="floatingInput">Description</label>
                </div>
                <div className="form-floating mb-3 mt-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Enter New Class"
                    value={formClass2.classCode}
                    onChange={handleInputChange2}
                    name = "classCode"
                  />
                  <label for="floatingInput">ClassCode</label>
                </div>

                <button
                  class="btn btn-outline-primary"
                  type="submit"
               
                >
                  Add{" "}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      <div className="container">
        <ViewAllClass />
      </div>
    </>
  );
};

export default AddClassForm;
