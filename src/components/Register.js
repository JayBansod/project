import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/auth";
const Register = () => {
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(user);
            const responce = await fetch("https://JayBansod.github.io/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(user),
            });
            const json = await responce.json();
            if (json.success) {
                // store in the local storeage by using useContext
                storeTokenInLS(json.token);
                navigate("/");
                setUser({ username: "", email: "", password: "", cpassword: "" });
            } else {
                alert("error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container">
                <h2>Create An Account </h2>

                <form onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" id="name" name="username" aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">
                            Confirm Password
                        </label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                    </div>

                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Register;
