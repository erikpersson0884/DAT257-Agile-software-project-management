import { useState } from "react";
import "./KlarnaBetal.css";
function KlarnaBetal() {
    const [email, setEmail] = useState("");
    const [postNumber, setPostNumber] = useState("");
    const [donationAmount, setDonationAmount] = useState("");
    const handleSubmit = (e: any) => {
    e.preventDefault();
    const donationData = {
        email,
        postNumber,
        donationAmount
    };
    console.log(donationData);
    setEmail("");
    setPostNumber("");
    setDonationAmount("");
    }
    return (
        <> 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email" className="form-label"></label>
                <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>

                <label htmlFor="postNummer" className="form-label"></label>
                <input
                type="text"
                className="form-control"
                placeholder="Post number"
                value={postNumber}
                onChange={(e) => setPostNumber(e.target.value)}
                ></input>
            </div>

            <div className="form-group">
                    <label htmlFor="cardNumber" className="form-label"></label>
                    <input
                    type="text"
                    className="form-control-full"
                    placeholder="Card Number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    ></input>
                </div>
        </form>
        </>
    )
}

export default KlarnaBetal;