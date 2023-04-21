  "use client";

  import React, { useState } from "react";
  import { useRouter } from 'next/router'

  const adminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault()
          if (username === 'admin' && password === 'admin') {
              router.push('/adminDashboard')
          } else {
              alert('Invalid username or password')
          }
    
   };

    return (
      <div className="container container-fluid">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-10 col-lg-5 ">
            <form
              className="border border-secondary rounded p-4"
              onSubmit={submitHandler}
            >
              <h1 className="mb-4">Login</h1>
              <div className="form-outline mb-4">
                <label className="form-label" for="username_field">
                  User Name
                </label>
                <input
                  type="text"
                  id="text_field"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="password_field">
                  Password
                </label>
                <input
                  type="password"
                  id="password_field"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>

              <button
                type="submit"
                className="btn btn-block w-100 btn-primary btn-block mb-4"
              >
                Sign in
              </button>

            
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default adminLogin;

  {/* import { useState } from 'react'
  import { useRouter } from 'next/router'

  export default function Admin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = (event) => {
      event.preventDefault()
      if (username === 'admin' && password === 'admin') {
        router.push('/adminDashboard')
      } else {
        alert('Invalid username or password')
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    )
  }
 */}

