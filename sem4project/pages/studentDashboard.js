// // import React, { useState } from "react";
// // import SAssignment from './studentAssignmnet';
// // import SQuiz from './studentQuiz';



// // // function StudentDashboard() {
// // //   const [classes, setClasses] = useState([]);

// // //   const handleJoinClass = (newClass) => {
// // //     setClasses([...classes, newClass]);
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Student Dashboard</h2>
// // //       <JoinClass onJoinClass={handleJoinClass} />
// // //       <hr />
// // //       {classes.map((classData, index) => (
// // //         <div key={index}>
// // //           <h3>{classData.className}</h3>
// // //           <p>{classData.description}</p>
// // //           <p>Class Code: {classData.classCode}</p>
// // //           <SAssignment classCode={classData.classCode} assignments={classData.assignments} />
// // //           <SQuiz classCode={classData.classCode} quizzes={classData.quizzes} />
// // //           <hr />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default StudentDashboard;


// // function StudentDashboard() {
// //   const [classes, setClasses] = useState([]);
// //   const [enrolledClasses, setEnrolledClasses] = useState([]);

// //   const handleEnrollClass = (enrolledClass) => {
// //     setEnrolledClasses([...enrolledClasses, enrolledClass]);
// //   };

// //   const handleDeleteEnrolledClass = (enrolledClassCodeToDelete) => {
// //     setEnrolledClasses(
// //       enrolledClasses.filter(
// //         (enrolledClassItem) =>
// //           enrolledClassItem.classCode !== enrolledClassCodeToDelete
// //       )
// //     );
// //   };

// //   return (
// //     <div>
// //       <h2>Student Dashboard</h2>
// //       <hr />
// //       <EnrollClass onEnrollClass={handleEnrollClass} classes={classes} />
// //       <h3>Enrolled Classes</h3>
// //       <ul>
// //         {enrolledClasses.map((enrolledClassItem) => (
// //           <li key={enrolledClassItem.classCode}>
// //             <h4>{enrolledClassItem.className}</h4>
// //             <p>
// //               <strong>Subject: </strong>
// //               {enrolledClassItem.subject}
// //             </p>
// //             <p>
// //               <strong>Description: </strong>
// //               {enrolledClassItem.description}
// //             </p>
// //             <p>
// //               <strong>Class Code: </strong>
// //               {enrolledClassItem.classCode}
// //             </p>
// //             <SAssignment classCode={enrolledClassItem.classCode} />
// //             <SQuiz classCode={enrolledClassItem.classCode} />
// //             <button
// //               onClick={() =>
// //                 handleDeleteEnrolledClass(enrolledClassItem.classCode)
// //               }
// //             >
// //               Unenroll from Class
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //       <h3>Available Classes</h3>
// //       <SClassList classes={classes} setClasses={setClasses} />
// //     </div>
// //   );
// // }

// // export default StudentDashboard;

// // // import React from 'react'
// // // import { useSession } from 'next-auth/react'


// // // const DashboardPage = () => {
// // //   const [session, loading] = useSession()

// // //   if (loading) {
// // //     return <div>Loading...</div>
// // //   }

// // //   if (!session) {
// // //     return <div>You need to sign in first.</div>
// // //   }

// // //   return <div>Welcome to the dashboard, {session.user.name}!</div>
// // // }

// // // export default DashboardPage
// import { useSession } from "next-auth/react";

// const StudentDashboard = () => {
//   const { data: session, status } = useSession({required: true});

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     return <div>You need to sign in first.</div>;
//   }

//   return <div>Welcome to the dashboard, {session.user.name}!</div>;
// };


// export default StudentDashboard;
  
function Home () {
  return <></>
}

export default Home
