import './footer.css'
import React from 'react';
import logo from '../../assets/img/logo-1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { NavIcon } from '../ui/navIcon';
import LeaveYourEmail from '../ui/footerEmail';
function Footer() {
    const date = new Date;
    return (
        <div id='footer'  >
            <div className="container-md d-flex flex-column  ">
                <LeaveYourEmail />
                <div className=" d-flex flex-row justify-content-between align-items-center gap-4">
                    <img src={logo} />
                    <div className="social d-flex flex-column flex-wrap ">
                        <ul id="social-links" className="  d-flex gap-2 flex-wrap  ">
                        <NavIcon path={"https://www.linkedin.com/in/ahmed-abu-seta-67436a21b/"} icon={faLinkedinIn} />
                        <NavIcon path={'#'} icon={faFacebookF}/>
                        <NavIcon path={'#'} icon={faGithub}/>
                        </ul>
                        <p className="text-capitalize">{date.getFullYear()} &copy; all rights reserved by ahmed ahmed abuseta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;