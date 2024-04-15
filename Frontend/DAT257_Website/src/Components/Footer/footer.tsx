// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./footer.css";
import {Link } from "react-router-dom";

function Footer() {

  return (
    <>
            <img src='src/assets/goal-logo.png'></img>
            <div>
                <h2>Sitemap</h2>
                <ul>
                    <li>          
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/information">Information</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Socials</h2>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/...'>Facebook</a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/...'>Linkedin</a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/...'>Instgram</a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/...'>X</a>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Contact</h2>
                <ul>
                    <li>
                        <a href="mailto:HungerZero@gmail.com">HungerZero@gmail.com</a>
                    </li>

                </ul>
            </div>
    </>
  );
}

export default Footer;

