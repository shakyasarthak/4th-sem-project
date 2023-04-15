import React, { useState } from "react";

function EnrollClass({ onEnrollClass }) {
  const [classCode, setClassCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onEnrollClass(classCode);
    setClassCode("");
  };

  return (
    <div>
      <h3>Enroll in a Class</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Class Code:
          <input
            type="text"
            value={classCode}
            onChange={(event) => setClassCode(event.target.value)}
          />
        </label>
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default EnrollClass;
