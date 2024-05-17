// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./Footer.css";
import {Link } from "react-router-dom";

function Footer() {

  return (
    <>
        <footer>
            <img src='src/assets/goal-logo.png'></img>
            <div>
                <h2>Sitemap</h2>
                <ul className='links'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/information">Information</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Socials</h2>
                <ul className='links'>
                    <li>
                        <a href='https://www.facebook.com/'>Facebook</a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/'>Linkedin</a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>Instgram</a>
                    </li>
                    <li>
                        <a href='https://www.x.com/'>Twitter / X</a>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Contact</h2>
                <ul className='links'>
                    <li>
                        <a href="mailto:HungerZero@gmail.com">HungerZero@gmail.com</a>
                    </li>

                </ul>
            </div>
        </footer>
    </>
  );
}

export default Footer;

