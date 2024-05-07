import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve the username from local storage
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-4 mb-2">
              <h1 className="display-4 fw-bolder mb-2 text-center">Hello, {username || "Guest"}</h1>
              <p className="lead text-center fs-4">Your Profile</p>
              <div className="col-md-6">
                <form method="POST">
                  <div class="mb-2">
                    <label htmlFor="name" class="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="username"
                      defaultValue={username} // Set default value to current username
                      disabled // Disable editing
                    />
                  </div>
                  <div class="mb-2">
                    <label htmlFor="exampleInputEmail1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      name="email"
                    />
                  </div>
                  <div class="mb-2">
                    <label htmlFor="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="password"
                    />
                  </div>
                  <div class="mb-2">
                    <label htmlFor="exampleInputPassword1" class="form-label">
                      Custom Database Filters
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="password"
                    />
                  </div>
                  <div id="emailHelp" class="form-text">Separate with spaces!</div>
                  <button type="submit" class="btn btn-primary my-2 mt-3 mb-3">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
