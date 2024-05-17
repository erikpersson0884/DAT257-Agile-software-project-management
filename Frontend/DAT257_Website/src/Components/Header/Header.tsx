import "./Header.css";
import {Link} from "react-router-dom";
import UserLogo from "./UserLogo";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

function capitalizeWords(str) {
    return str.replace(/_/g, ' ')
              .replace(/\b\w/g, (char) => char.toUpperCase());
}

function Header(){

    let navList = ["information", "Statistics", "donate", "about", "contact", "top_donations"];
    const [showLoginForm, setShowLoginForm] = useState(false);

    const displayLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return(
        <header>
            <div className = "wrapperHead">
                <Link to="/" className="logoLinkHeader">
                    <img src="src/assets/logo.png" className="logoHeader"></img>
                </Link>

                <div className = "nav">
                    <ul className = "navList">
                        <li className="divNavItemA">
                            <Link to="/">Home</Link>
                        </li>

                        {navList.map((item) => 
                            <li className="divNavItemA">
                                <Link to={"/"+item} >{capitalizeWords(item)}</Link>
                            </li>
                        )}
                        <div className="userLogo">
                        <UserLogo showLoginForm={showLoginForm} displayLoginForm={displayLoginForm}></UserLogo>
                        </div>

                    </ul>

                    <div className="loginFormContainer">
                    {showLoginForm && <LoginForm showLoginForm={showLoginForm} displayLoginForm={displayLoginForm}></LoginForm>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;