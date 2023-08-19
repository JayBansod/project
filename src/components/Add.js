import React, { useState } from "react";

function Add() {
  const [car, setCar] = useState();
  const [store, setStore] = useState();
  const [amount, setAmount] = useState();
  const [discription, setDiscription] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(car, " ", store, " ", amount, " ", discription);
  };

  return (
    <>
      <div className="container m-5 ">
        <form>
          <div className="d-flex flex-column flex-wrap">
            <div className="row1">
              <div className="d-flex justify-content-around align-items-center flex-wrap">
                <div className="mb-3">
                  <label for="accountName" className="form-label">
                    From:
                  </label>
                  <br />
                  <select
                    name="accountName"
                    id="accountName"
                    className="form-select"
                    onChange={(e) => {
                      setCar(e.target.value);
                    }}
                  >
                    <option selected>Choose...</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
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
                    onChange={(e) => {
                      setStore(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label for="amount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="mb-3">
                <label for="discription" className="form-label">
                  Discription
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="discription"
                  onChange={(e) => {
                    setDiscription(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
