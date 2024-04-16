import "./Header.css";
import {Link} from "react-router-dom";
import UserLogo from "./UserLogo";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";


function Header(){
    let navList = ["home", "information"];
    const [showLoginForm, setShowLoginForm] = useState(false);

    const displayLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return(
        <header>
            <div className = "wrapperHead">

                <img src="src/assets/react.svg" className="headerLogo"></img>

                <div className = "nav">
                    <ul className = "navList">
                        {navList.map((item) => 
                            <li className="divNavItemA">
                                <Link to={"/"+item} >{item}</Link>
                            </li>
                        )}
                        <div className="userLogo">
                        <UserLogo showLoginForm={showLoginForm} displayLoginForm={displayLoginForm}></UserLogo>
                        </div>

                    </ul>

                    <div className="loginFormContainer">
                    {showLoginForm && <LoginForm></LoginForm>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;