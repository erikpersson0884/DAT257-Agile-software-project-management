import "./Header.css";
function Header(){
    let navList = ["Home", "Donate", "About", "Contact", "Login", "Register"];
    return(
        <div className = "wrapperHead">
            <div className = "logo">
                {/* TODO: Fixa en logga */}
            </div>
            <div className = "nav">
                <ul className = "navList">
                    {navList.map((item) => 
                    <li
                        className = "navItem"
                        key={item}
                    >
                        <div className = "divNavItem">
                            <a className = "divNavItemA" href="#">
                                {item}
                            </a>
                        </div>
                    </li>
                    )}
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;