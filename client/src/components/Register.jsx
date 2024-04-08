import React from 'react'
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const history = useNavigate()
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    // handle input
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }

    // handle submissions
    const handleSubmit = async(event) => {
        event.preventDefault();
        const {username, email, password} = user;
        try {
            // push port 3001 instead of 3000 (backend)
            const res = await fetch ('/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })

            if(res.status === 400 || !res){
                window.alert("Already used details")
            } else {
                window.alert("Welcome to Nourishnet!");
                history.pushState('/login')
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="container shadow-lg my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder my-2">Register</h1>
                        <p className="lead text-center mb-2">Enter your info</p>
                        <h5 className="mb-2">or</h5>
                        <NavLink to="/login" className="btn text-black btn-outline-info rounded-pill pb-2 w-50 m-2 mb-2">
                            Log In
                        </NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-2">
                                <label htmlFor="name" class="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    name="username"
                                    value={user.username}
                                    onChange={handleInput}
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
                                    value={user.email}
                                    onChange={handleInput}
                                />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary my-2 mb-3">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login