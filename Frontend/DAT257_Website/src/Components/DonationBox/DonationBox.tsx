import { useState } from "react";
import "./DonationBox.css";
import axios from "axios";

function DonationBox() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(Boolean);
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
      isAnonymous,
      email,
      donationAmount,
    };

    axios
      .post("/api/donate/addDonation", donationData)
      .then((response) => {
        console.log("Response data", response.data);
        if (response.status === 200) {
          console.log("Donation success");
        }
        else {
          console.log("Donation fail");
        }
      });
    console.log(donationData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setDonationAmount("");
  };

  return (
    <>
      <div className="wrapperDonationBox">
        <div className="donate rounded">
          <h2 className="mb-3"> Donate </h2>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
                <label htmlFor="firstName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>

                <label htmlFor="lastName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
            </div>

            <div className="form-group">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>

                <label htmlFor="donationAmount" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Donation amount $"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                ></input>
              </div>

            <div className="form-group">
                <label htmlFor="cardNumber" className="form-label"></label>
                <input
                  type="text"
                  className="form-control-full"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                ></input>
            </div>

            <div className="form-group">
                <label htmlFor="expDate" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Expiration Date"
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                ></input>

                <label htmlFor="cvcNumber" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CVC Number"
                  value={cvcNumber}
                  onChange={(e) => setCvcNumber(e.target.value)}
                ></input>
            </div>

            <div className="form-group">
              <div className="checkbox-lg">
                <input className="form-check-input" type="checkbox" defaultChecked={false} onChange={(e) => setIsAnonymous(!isAnonymous)}></input>
              </div>

              <div className="anonymous-label">
              <label className="form-check-label" htmlFor="flexCheckDefault"> Make me anonymous </label>
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
