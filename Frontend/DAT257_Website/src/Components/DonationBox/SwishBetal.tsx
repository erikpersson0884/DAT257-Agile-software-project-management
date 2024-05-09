import { useState } from "react";
import "./SwishBetal.css";
function SwishBetal() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [donationAmount, setDonationAmount] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(Boolean);
    const handleSubmit = (e: any) => {
    e.preventDefault();
    const donationData = {
        phoneNumber,
        donationAmount,
        isAnonymous
    };
    console.log(donationData);
    setPhoneNumber("");
    setDonationAmount("");
    }
    return (
        <> 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="phoneNumber" className="form-label"></label>
                <input
                type="text"
                className="form-control-full"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
            </div>

            <div className="form-group">
                <label htmlFor="donationAmount" className="form-label"></label>
                <input
                type="text"
                className="form-control-full"
                placeholder="Donation Amount $"
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

export default SwishBetal;