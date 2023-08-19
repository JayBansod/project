import React, { useState } from "react";

function Self() {
  const [firstBank, setFirstBank] = useState();
  const [secondBank, setSecondBank] = useState();
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("firstbank ", firstBank, "sb ", secondBank, "amo ", amount);
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
              <select
                id="inputState"
                className="form-select"
                onChange={(e) => {
                  setFirstBank(e.target.value);
                }}
              >
                <option selected>Choose...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="inputState" className="form-label">
                To Bank
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={(e) => {
                  setSecondBank(e.target.value);
                }}
              >
                <option selected>Choose...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <div class="col-md-3">
              <label for="inputState" className="form-label">
                Enter Amount
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter the amount"
                aria-label="amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
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
