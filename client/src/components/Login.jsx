import React from 'react'
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) =>{
        let name = event.target.name
        let value = event.target.value

        setUser({...user, [name]:value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const {email, password} = user;
        try {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            if(res.status === 400 || !res){
                window.alert("bad creds")
            } else {
                window.alert("Login Successful");
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="container shadow-lg my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form">
                        <h1 className="display-4 fw-bolder my-2">New to the Net?</h1>
                        <NavLink to="/register" className="btn text-black btn-outline-info rounded-pill pb-2 w-50 m-2 mb-2">
                            Register
                        </NavLink>
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-6">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">
                                    Email
                                </label>
                                <input 
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="mb-2">
                                <label for="exampleInputPassword1" class="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary my-2 mb-3">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login