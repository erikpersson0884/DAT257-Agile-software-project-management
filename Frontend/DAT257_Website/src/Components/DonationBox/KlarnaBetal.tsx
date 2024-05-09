import { useState } from "react";
import "./KlarnaBetal.css";
function KlarnaBetal() {
    const [email, setEmail] = useState("");
    const [postNumber, setPostNumber] = useState("");
    const [donationAmount, setDonationAmount] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(Boolean);
    const handleSubmit = (e: any) => {
    e.preventDefault();
    const donationData = {
        email,
        postNumber,
        donationAmount,
        isAnonymous
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
        </>
    )
}

export default KlarnaBetal;