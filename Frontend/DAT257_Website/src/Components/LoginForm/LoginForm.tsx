import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";

interface Props {
  showLoginForm: boolean;
  displayLoginForm: () => void;
}

function LoginForm({showLoginForm, displayLoginForm }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  testAdminKey()

  function testAdminKey() {
    if (localStorage.getItem('adminKey') !== null) {
      axios
        .post("/api/auth/testAdminKey", {adminKey: localStorage.getItem('adminKey')})
        .then(response => {
          console.log('Response data:', response.data);
          if (response.status === 200) {
            console.log('Login successful');
            setLoggedIn(true);
          } else {
            console.log('Login failed');
          }
        })
        .catch(error => {
          console.error('Error sending POST request:', error);
        });
    }
  };

  function logOut() {
    localStorage.removeItem('adminKey');
    setLoggedIn(false);
    console.log('Logout successful');
    displayLoginForm();
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    if (loggedIn) {
      logOut();
      return;
    } else {
    const loignData = {
      email,
      password,
    };

    // setEmail("");
    // setPassword("");
  
    console.log(loignData);

    axios
      .post("/api/auth/login", loignData)
      .then(response => {
        console.log('Response data:', response.data);
        if (response.status === 200) {
          displayLoginForm();
          console.log('Login successful');
          localStorage.setItem('adminKey', response.data.adminKey);

        } else {
          console.log('Login failed');
        }
      })
      .catch(error => {
        console.error('Error sending POST request:', error);
      });
    }
  }
 
  const handleRemoveAccount = () => {
    axios
      .post("/api/people/removeUser", {adminKey: localStorage.getItem('adminKey')})
      .then(response => {
        console.log('Response data:', response.data);
        if (response.status === 200) {
          logOut();
          displayLoginForm();
        } else {
          console.log('Failed to remove account');
        }
      })
      .catch(error => {
        console.error('Error sending POST request:', error);
      });
  }

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
              {loggedIn ? (
                <button type="button" className="buttonLoginForm btn btn-danger py-2 w-40 mt-2" onClick={handleRemoveAccount}>
                  Remove Account
                </button>
              ) : (
                <a href={"/register"}  className="registerLoginForm btn btn-register py-2 w-40 mt-2">
                  Register
                </a>
              )}

              {loggedIn ? (
                <button type="submit" className="buttonLoginForm btn btn-danger py-2 w-40 mt-2">Logout</button>
              ) : (
                <button type="submit" className="buttonLoginForm btn btn-success py-2 w-40 mt-2">Login</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
