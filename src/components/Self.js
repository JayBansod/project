import React, { useEffect, useState } from "react";
import { useAuth } from "../middleware/auth";
function Self() {
    const { accountData, userData, callUserAuthentication, callGetAccountData } = useAuth();
    useEffect(() => {
        callUserAuthentication();
        callGetAccountData();
    }, []);
    const userId = userData._id;

    const [info, setInfo] = useState({ userId: userId, from: "", to: "", amount: 0, discription: "Self Transfer" });
    // const [subMethod, setSubMethod] = useState({ userId: userId, from: "", to: "", amount: "", method: "sub" });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
        // setSubMethod({ ...subMethod, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let subMethod = {
            userId: userId,
            from: info.from,
            amount: info.amount,
            action: "sub",
        };
        let addMethod = {
            userId: userId,
            from: info.to,
            amount: info.amount,
            action: "add",
        };
        try {
            console.log("subMethod ", subMethod);
            const debitDetail = await fetch("https://JayBansod.github.io/api/account/updateAccountBalance", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(subMethod),
            });
            console.log("debitDetail", debitDetail);
            const creditDetail = await fetch("https://JayBansod.github.io/api/account/updateAccountBalance", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(addMethod),
            });
            console.log("creditDetail", creditDetail);
            const response = await fetch("https://JayBansod.github.io/api/account/addTransaction", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(info),
            });
            const json = await response.json();
            if (json.success) {
                // console.log(json);
                alert("Payment Done");
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
                    <div className="row g-4">
                        <div className="col-md-3">
                            <label for="inputState" className="form-label">
                                From Bank
                            </label>
                            <select name="from" id="inputState" className="form-select" onChange={handleChange}>
                                <option selected>Choose...</option>
                                {accountData?.map((items, index) => {
                                    return (
                                        <>
                                            <option value={items.bankName} key={index}>
                                                {items.bankName}
                                            </option>
                                        </>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label for="inputState" className="form-label">
                                To Bank
                            </label>
                            <select name="to" id="inputState" className="form-select" onChange={handleChange}>
                                <option selected>Choose...</option>
                                {accountData?.map((items, index) => {
                                    return (
                                        <>
                                            <option value={items.bankName} key={index}>
                                                {items.bankName}
                                            </option>
                                        </>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="col-md-3">
                            <label for="inputState" className="form-label">
                                Enter Amount
                            </label>
                            <input
                                name="amount"
                                type="number"
                                className="form-control"
                                placeholder="Enter the amount"
                                aria-label="amount"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="m-4">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Self;
