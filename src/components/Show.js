import React from "react";
import { Link } from "react-router-dom";
function Show() {
  return (
    <>
      <div className="container">
        <div className="border my-2">
          <div className="d-flex flex-wrap">
            <div className="d-flex justify-content-around align-items-center  w-100 h-50 border flex-wrap">
              <div>
                <p className="fs-5 border-bottom border-dark">ABC</p>
                <div className="border p-2 mb-2 bg-secondary bg-opacity-10 border rounded ">
                  1200
                </div>
              </div>
              <div>
                <p className="fs-5 border-bottom border-dark">ABC</p>
                <div className="border p-2 mb-2 bg-secondary bg-opacity-10 border rounded ">
                  1200
                </div>
              </div>
              <div>
                <p className="fs-5 border-bottom border-dark">ABC</p>
                <div className="border p-2 mb-2 bg-secondary bg-opacity-10 border rounded ">
                  1200
                </div>
              </div>
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
              <tr id="tableRow">
                <td id="td1">1</td>
                <td id="td2">aasbs</td>
                <td id="td3">bsjbhjcba hsj</td>
                <td id="td4">21</td>
                <td id="td5">sca Lorem ipsum dolor sit amet consectetur</td>
                <td id="td6">
                  <button className="btn btn-success mx-2">Update</button>
                  <button className="btn btn-danger ">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>a</td>
                <td>b</td>
                <td>21</td>
                <td>aksncfkj</td>
                <td>
                  <button className="btn btn-success mx-2">Update</button>
                  <button className="btn btn-danger ">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>ajshjbfj jsb</td>
                <td>b</td>
                <td>21</td>
                <td>sca</td>
                <td>
                  <button className="btn btn-success mx-2">Update</button>
                  <button className="btn btn-danger ">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Show;
