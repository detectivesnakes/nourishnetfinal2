import React, { useState, useEffect } from "react";
import Featured from './Featured';

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
              <p className="lead text-center fs-4">Welcome Back</p>
              <div className="col">

                {/*<form method="POST">
                  <div class="mb-2">
                    <label htmlFor="exampleInputPassword1" class="form-label">
                      Custom Database Filters
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="filters"
                    />
                  </div>
                  <div id="emailHelp" class="form-text">Separate with commas</div>
                  <button type="submit" class="btn btn-secondary my-2 mt-3 mb-3">Update</button>
                </form>*/}

              </div>
            </div>
          </div>
        </div>
      </section>
      <Featured />
    </div>
  );
}

export default Dashboard;
