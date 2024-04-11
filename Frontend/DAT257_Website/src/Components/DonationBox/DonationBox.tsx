import { useState } from "react";
import "./DonationBox.css";

function DonationBox() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvcNumber, setCvcNumber] = useState("");
  const [expDate, setExpDate] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const donationData = {
      firstName,
      lastName,
      email,
      donationAmount,
      cardNumber,
      cvcNumber,
      expDate,
    };
    console.log(donationData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setDonationAmount("");
    setCardNumber("");
    setCvcNumber("");
    setExpDate("");
  };

  return (
    <>
      <div className="wrapper">
        <div className="donate rounded">
          <h2 className="mb-3"> Donate </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col">
                <label htmlFor="firstName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>

              <div className="col">
                <label htmlFor="lastName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group row">
              <div className="col">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="col">
                <label htmlFor="donationAmount" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Donation amount $"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              ></input>
            </div>

            <div className="form-group row">
              <div className="col">
                <label htmlFor="expDate" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Expiration Date"
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                ></input>
              </div>

              <div className="col mb-4">
                <label htmlFor="cvcNumber" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CVC Number"
                  value={cvcNumber}
                  onChange={(e) => setCvcNumber(e.target.value)}
                ></input>
              </div>
            </div>

            <button type="submit" className="btn btn-success py-3 w-100 mt-2">
              Donate
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default DonationBox;
