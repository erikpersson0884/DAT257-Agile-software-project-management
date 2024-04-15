import "./Header.css";
import {Link} from "react-router-dom";


function Header(){
    let navList = ["information"];
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
                                <Link to={"/"+item} >{item}</Link>
                            </li>
                        
                        )}
                        
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;