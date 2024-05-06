import { useState } from "react";
import "./RegisterForm.css";
import axios from "axios";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [surname, setsurname] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    const registerData = {
      email,
      password,
      name,
      surname,
    };

    axios
      .post("/api/people/addUser", registerData)
      .then((response) => {
        console.log("Response data:", response.data);
        if (response.status === 200) {
          console.log("Register successful");
        } else {
          console.log("Register failed");
        }
      });

    console.log(registerData);
    setEmail("");
    setPassword("");
    setname("");
    setsurname("");
  };

  return (
    <>
      <div className="">
        <div className="registerFormBox">
          <h3> Register </h3>
          <form onSubmit={handleRegister}>
            <label htmlFor="name" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></input>

            <label htmlFor="name" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={surname}
              onChange={(e) => setsurname(e.target.value)}
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
