import React, { useState } from "react";

function Addaccount() {
  const [bankName, setBankName] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("bankname ", bankName, " amount ", amount);
  };
  return (
    <>
      <div className="container m-5">
        <form onSubmit={onSubmit} className="m-5">
          <div class="row g-3">
            <div className="col">
              <input
                type="text"
                class="form-control"
                placeholder="Enter the Bank Name"
                aria-label="Bank name"
                onChange={(e) => {
                  setBankName(e.target.value);
                }}
              />
            </div>
            <div class="col">
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
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addaccount;
