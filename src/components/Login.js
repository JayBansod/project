import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/auth";
const Login = () => {
    const navigate = useNavigate();
    const { callFunctions, storeTokenInLS } = useAuth();

    const [user, setUser] = useState({ email: "", password: "" });
    //for redirect
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(user);
            const responce = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(user),
            });
            const json = await responce.json();
            if (json.success) {
                console.log(json);
                // store in the local storeage by using useContext
                storeTokenInLS(json.token);
                callFunctions(json.token);
                navigate("/");
                setUser({ email: "", password: "" });
            } else {
                alert("Error");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="container">
                <h2>Login </h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            className="form-control"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="password" name="password" id="password" value={user.password} className="form-control" onChange={onChange} />
                    </div>

                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Login;
