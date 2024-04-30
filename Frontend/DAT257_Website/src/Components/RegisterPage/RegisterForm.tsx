import { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    const registerData = {
      email,
      password,
      firstName,
      lastName,
    };

    console.log(registerData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <div className="">
        <div className="registerFormBox">
          <h3> Register </h3>
          <form onSubmit={handleRegister}>
            <label htmlFor="firstName" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>

            <label htmlFor="firstName" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>

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

            <div className="registerLoginWrapper">
              <button type="submit" className="btn btn-success py-3 w-100 mt-2">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
