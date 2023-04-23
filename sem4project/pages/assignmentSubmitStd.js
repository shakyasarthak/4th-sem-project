// // import x from '/src/styles/Navbar.module.css';
// import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import as from '/styles/AssignmentSubmit.module.css';
// import { useState } from 'react'

// export default function Assignment() {
//   const [file, setFile] = useState(null)

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     console.log('Only PUT PDF OR DOCX FILES')
//   }

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0])
//   }

//   return (
//     <div>
//       <h1>Assignment Submission</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="file">Select a file:</label>
//           <input
//             type="file"
//             id="file"
//             class={as.file_upload}   
//             accept=".pdf,.doc,.docx,.txt"
//             onChange={handleFileChange}
//             placeholder="Select a file"
            
//           />
//         </div>
//         <button type="submit">POST NOW</button>
//       </form>
//     </div>
//   )
// }

import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [fileSrc, setFileSrc] = useState();
  const [uploadData, setUploadData] = useState();

  function handleOnChange(changeEvent) {
    setFileSrc(changeEvent.target.files[0]);
    setUploadData(undefined);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData();
    formData.append('file', fileSrc);
    formData.append('upload_preset', 'Assignment');
    formData.append('resource_type', 'auto');

    const data = await fetch('https://api.cloudinary.com/v1_1/dtordrjof/raw/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setFileSrc(undefined);
    setUploadData(data);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Assignment Uploader</title>
        <meta name="description" content="Upload your Assignment here " />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Assignment Uploader
        </h1>

        <p className={styles.description}>
          Upload your Assignment!
        </p>

        <form className={styles.form} method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <p>
            <input type="file" name="file" accept="application/pdf" />
          </p>

          {fileSrc && (
            <p>
              <button>Upload File</button>
            </p>
          )}

          {uploadData && (
            <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
          )}
        </form>
      </main>
    </div>
  )
}
