import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const loignData = {
      email,
      password,
    };

    console.log(loignData);
    setEmail("");
    setPassword("");
  

    axios
      .post("/api/auth/login", loignData)
      .then(response => {
        console.log('Response data:', response.data);
      })
      .catch(error => {
        console.error('Error sending POST request:', error);
      });
  };


  const handleRegister = () => {
  };

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

            <div className="registerLoginWrapper">
              <a href={"/register"}  className="registerLoginForm btn btn-register py-2 w-40 mt-2">
                Register
              </a>
              <button type="submit" className="buttonLoginForm btn btn-success py-2 w-40 mt-2">
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
