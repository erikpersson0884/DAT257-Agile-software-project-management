import "./LoginForm.css";
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

  const handleRegister = () => {};

  return (
    <>
      <div className="loginFormContainer">
        <div className="LoginBox">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <div className="register-login-wrapper">
              <p className="register"> Register </p>
              <button type="submit" className="btn btn-success py-2 w-40 mt-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
