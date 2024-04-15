import "./LoginForm.css"
import { useState } from "react";

function LoginForm() {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = (e: any) => {
    e.preventDefault();
    const donationData = {
    email,
    password,
    };

    console.log(donationData);
    setEmail("");
    setPassword("");

};

    return (
        <>

        <div className="wrapperLoginForm">
            <div className="LoginBox">
            <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>


            </div>

            <div className="form-group row">
              <div className="col">
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>            
              
              </div>

              <button type="submit" className="btn btn-success py-3 w-60 mt-2">
              Login
            </button>

              </form>
              </div>
              </div>

        </>
    )

}

export default LoginForm;