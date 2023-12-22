import React, { useState } from "react";
import { useAuth } from "../middleware/auth";
function Add() {
    const { accountData, userData } = useAuth();
    const userId = userData._id;

    const [transactionInfo, setTransactionInfo] = useState({ userId: userId, from: "", to: "", amount: 0, discription: "" });
    const [updateAccount, setUpdateAccount] = useState({ userId: userId, from: "", to: "", amount: 0, action: "sub" });

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTransactionInfo({ ...transactionInfo, [name]: value });
        setUpdateAccount({ ...updateAccount, [name]: value });
        // console.log("transactionInfo", transactionInfo);
        // console.log("setUpdateAccount", updateAccount);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            // console.log("transactionInfo", transactionInfo);

            // console.log("appdate account add.js", updateAccount);
            const update = await fetch("http://localhost:5000/api/account/updateAccountBalance", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(updateAccount),
            });
            // console.log("update add.js", update);
            const response = await fetch("http://localhost:5000/api/account/addTransaction", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(transactionInfo),
            });
            // console.log("transactionInfo response add.js", response);
            const json = await response.json();
            if (json.success) {
                // console.log(json);
                alert("transcation added");
            } else {
                alert("Error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container m-5 ">
                <form onSubmit={onSubmit}>
                    <div className="d-flex flex-column flex-wrap">
                        <div className="row1">
                            <div className="d-flex justify-content-around align-items-center flex-wrap">
                                <div className="mb-3">
                                    <label for="accountName" className="form-label">
                                        From:
                                    </label>
                                    <br />
                                    <select name="from" id="accountName" className="form-select" onChange={onChange}>
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
                                <div className="mb-3">
                                    <label for="toStore" className="form-label">
                                        TO
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="toStore"
                                        name="to"
                                        value={transactionInfo.to}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="amount" className="form-label">
                                        Amount
                                    </label>
                                    <input type="number" className="form-control" id="amount" name="amount" onChange={onChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="mb-3">
                                <label for="discription" className="form-label">
                                    Discription
                                </label>
                                <input type="text" className="form-control " id="discription" name="discription" onChange={onChange} />
                            </div>
                        </div>
                        <div className="row3">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Add;
