import "./Header.css";
import {Link} from "react-router-dom";
import UserLogo from "./UserLogo";


function Header(){
    let navList = ["home", "information"];
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
                    <UserLogo></UserLogo>
                    </ul>


                </div>
            </div>
        </header>
    )
}

export default Header;