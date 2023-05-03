import React from "react";
import { submissions } from "@/components/submission_status";

const ViewAllSubmitStatus = () => {
  return (
    <div>
      <h1>All Submission Status</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ padding: "6px" }}>Student ID</th>
            <th style={{ padding: "6px" }}>Student Name</th>
            <th style={{ padding: "6px" }}>Class Code</th>
            <th style={{ padding: "6px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.studentId}>
              <td style={{ padding: "6px" }}>{submission.studentId}</td>
              <td style={{ padding: "6px" }}>{submission.studentName}</td>
              <td style={{ padding: "6px" }}>{submission.classCode}</td>
              <td style={{ padding: "6px" }}>{submission.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllSubmitStatus;
