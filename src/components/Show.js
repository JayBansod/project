import React from "react";
import { useAuth } from "../middleware/auth";
function Show() {
    const { accountData, transction } = useAuth();
    console.log(transction);
    return (
        <>
            <div className="container">
                <div className="border my-2">
                    <div className="d-flex flex-wrap">
                        <div className="d-flex justify-content-around align-items-center  w-100 h-50 border flex-wrap">
                            {accountData?.map((items, index) => {
                                return (
                                    <>
                                        <div key={index}>
                                            <p className="fs-5 border-bottom border-dark">{items.bankName}</p>
                                            <div className="border p-2 mb-2 bg-secondary bg-opacity-10 border rounded ">{items.amount}</div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="border my-3">
                    <table className="table table-striped table-hover " id="tableCss">
                        <thead className="p-5">
                            <tr>
                                <th>Sr</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Amount</th>
                                <th>Discription</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {transction?.map((items, index) => {
                                return (
                                    <>
                                        <tr id="tableRow" key={index}>
                                            <td id="td1">{index + 1}</td>
                                            <td id="td2">{items.from}</td>
                                            <td id="td3">{items.to}</td>
                                            <td id="td4">{items.amount}</td>
                                            <td id="td5">{items.discription}</td>
                                            <td id="td6">
                                                <button className="btn btn-success mx-2">Update</button>
                                                <button className="btn btn-danger ">Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Show;
