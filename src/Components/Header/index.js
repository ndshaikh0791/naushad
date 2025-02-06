import Edit from './Header.module.scss'
import {  Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import {  useState } from 'react';




const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    
    return (
        <>
            <div className={Edit.AA}>
                <div className={Edit.A2}>
                    <h2 className={Edit.Logo}>
                        <span>D</span>evloper
                        <span>G</span>uru
                    </h2>
                    
                </div>
                <div className={Edit.A3}>
                <div className={showMediaIcons ? "Navbar mobileNavbar" : "Navbar"}>
                    <div className={showMediaIcons ? `Navbar ${Edit.mobileNavbar}`:'Navbar'}>
                   
                    <ul className={Edit.Navbar}>
                        <li><Link to='home'><b>HOME</b></Link></li>
                        <li><Link to='/about us'><b>ABOUT US</b></Link></li>
                        <li><Link to='/courses'><b>COURSES</b></Link></li>
                        <li><Link to='/gallery'><b>GALLERY</b></Link></li>
                        <li><Link to='/placement'><b>PLACEMENT</b></Link></li>
                        <li><Link to='/student feedback'><b>STUDENT FEEDBACK</b></Link></li>
                        <li><Link to='/blog'><b>BLOG</b></Link></li>
                        <li><Link to='/contactus'><b>CONTACT US</b></Link></li>
                        
                    </ul>
                    </div>
                    </div>
                   
                   
                    <div className={Edit.socialmedia}>
                    <li className={Edit.socialmediadestop} >
                            <a href="https://www.facebook.com/PerfectDeveloperGuru#" ><FaFacebookF className={Edit.facebook} /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/developer_guru" ><FaInstagram className={Edit.instagram} /></a>
                        </li>
                        <li>
                            <a href="#"><FaWhatsapp className={Edit.whatsapp} /></a>
                        </li>

                        <div className={ Edit.hamburgermenu}>
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                        
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Header;


{/* <li><Link to='#'>HOME</Link></li>
<li><Link to='#'>ABOUT US</Link></li>
<li><LINK to='#'>COURSES</LINK></li>
<li><Link to='#'>GALLERY</Link></li>
<li><Link to='#'>PLACEMENT</Link></li>
<li><Link to='#'>STUDENT FEEDBACK</Link></li>
<li><Link to='#'>BLOG</Link></li>
<li><Link to='#'>CONTACT US</Link></li> */}