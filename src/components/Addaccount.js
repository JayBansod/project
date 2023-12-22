import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/auth";
function Addaccount() {
    const { userData } = useAuth();
    const navigate = useNavigate();
    let userId = userData._id;
    const [user, setUser] = useState({ userId: userId, bankName: "", amount: "0" });
    const handleChange = (e) => {
        console.log(user);
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const responce = await fetch("http://localhost:5000/api/account/addAccount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const json = await responce.json();
            if (json.success) {
                alert("Added successful");
                navigate("/");
            } else {
                alert("Error");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="container m-5">
                <form onSubmit={onSubmit} className="m-5">
                    <div className="row g-3">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Bank Name"
                                name="bankName"
                                aria-label="Bank name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter the amount"
                                aria-label="amount"
                                name="amount"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary">Add Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Addaccount;
