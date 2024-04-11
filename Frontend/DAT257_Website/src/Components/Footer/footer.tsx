// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./footer.css";

function Footer() {

  return (
    <>
            <img src='src/assets/goal-logo.png'></img>
            <div>
                <h2>Sitemap</h2>
                <ul>
                    <li>Home</li>
                    <li>News</li>
                    <li>Events</li>
                    <li>Projects</li>
                    <li>Publications</li>
                    <li>People</li>
                    <li>Links</li>
                </ul>
            </div>

            <div>
                <h2>Socials</h2>
                <ul>
                    <li>
                        <a href='instagram.com/...'>Facebook</a>
                    </li>
                    <li>
                        <a href='instagram.com/...'>Linkedin</a>
                    </li>
                    <li>
                        <a href='instagram.com/...'>Instgram</a>
                    </li>
                    <li>
                        <a href='instagram.com/...'>X</a>
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

