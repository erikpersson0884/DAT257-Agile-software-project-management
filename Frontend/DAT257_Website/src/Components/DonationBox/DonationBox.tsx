import "./DonationBox.css";
function DonationBox() {
  return (
    <>
      <div className="wrapper">
        <div className="donate rounded">
          <h2 className="mb-3"> Donate </h2>
          <form>
            <div className="form-group row">
              <div className="col">
                <label htmlFor="firstName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                ></input>
              </div>

              <div className="col">
                <label htmlFor="lastName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
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
                ></input>
              </div>

              <div className="col">
                <label htmlFor="donationAmount" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Donation amount $"
                ></input>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                placeholder="Card Number"
              ></input>
            </div>

            <div className="form-group row">
              <div className="col">
                <label htmlFor="expDate" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Expiration Date"
                ></input>
              </div>

              <div className="col mb-4">
                <label htmlFor="cvcNumber" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CVC Number"
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
