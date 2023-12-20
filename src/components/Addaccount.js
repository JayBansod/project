import React, { useState } from "react";

function Addaccount() {
    let userId = localStorage.getItem("userId");
    const [user, setUser] = useState({ userId: userId, bankName: "", amount: "" });
    const handleChange = (e) => {
        console.log(user);
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const responce = await fetch("http://localhost:5000/account/addAccount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const json = await responce.json();
            if (json.success) {
                alert("Added successful");
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
