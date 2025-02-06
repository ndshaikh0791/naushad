import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Try.css";
import { useState } from "react";


const Try = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);


    return (
        <div>
            <nav className="main-nav">
                {/* 1st step */}
                <div className="logo">
                    <h2>
                        <span>D</span>evloper
                        <span>G</span>uru
                    </h2>
                </div>
                {/* 2st step */}
                <div className={showMediaIcons ? "manu-link mobile-menu-link" : "manu-link"}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Courses</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Placement</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>

                {/* 3rd step */}
                <div className="social-media">
                    <ul className="social-media-destop">
                        <li>
                            <a href="https://www.developerguru.in/" target="Devloperguru"><FaFacebookF className="facebook" /></a>
                        </li>

                        <li>
                            <a href="https://www.developerguru.in/" target="Devloperguru"><FaInstagram className="instagram" /></a>
                        </li>



                        <li>
                            <a href="https://www.developerguru.in/" target="Devloperguru"><FaWhatsapp className="whatsapp" /></a>
                        </li>




                    </ul>

                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>

            </nav>

            {/* Hero section */}

            <section className="hero-section">

                <h1>DevloperGuru</h1>
            </section>


        </div>
    )
}

export default Try;