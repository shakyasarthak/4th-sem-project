import React, { useState } from "react";
import { enclasses } from "../components/enrolled_class";
import { classes } from "../components/class";
import ViewallEnroll from "../components/viewAllEnrolled";
import y from "styles/s_dashboard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddEnroll = () => {
  const [classCode, setClassCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setClassCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the class code is already enrolled
    const isAlreadyEnrolled = enclasses.some((e) => e.classCode === classCode);
    if (isAlreadyEnrolled) {
      setErrorMessage("You are already enrolled in this class");
      return;
    }

    // Check if the class code is valid
    const classInfo = classes.find((c) => c.classCode === classCode);
    if (!classInfo) {
      setErrorMessage("Invalid class code");
      return;
    }

    // Add the enrollment
    const newEnrollment = {
      id: Math.random().toString(36).substr(2, 9),
      classCode: classCode,
      studentId: "123456",
    };
    enclasses.push(newEnrollment);
    setClassCode("");
    setErrorMessage("");
  };

  return (
    <div className={y.box}>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="input-group flex-nowrap col-auto">
          <span class="input-group-text" id="addon-wrapping">
            CLASS CODE
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Class Code"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={classCode} onChange={handleInputChange}
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Add Enrollment
          </button>
        {errorMessage && <div>{errorMessage}</div>}
        </div>
      </form>

      {/* <h1>Enrolled Classes</h1>
      <form class="row g-3" onSubmit={handleSubmit}>
        <label>
          Enter Class Code:
          <input type="text" value={classCode} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Enrollment</button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
       */}

      <ViewallEnroll />
    </div>
  );
};

export default AddEnroll;
