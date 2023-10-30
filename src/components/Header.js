import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
function Header (){
    const[activLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY >50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll',onScroll)

        return ()=> window.removeEventListener('scroll',onScroll)
    },[])
    const activNav = (value)=>{
        setActiveLink(value);
        console.log("nys")
    } 

    return(
    <nav className={scrolled?"navbar navbar-expand-lg fixed-top p-1 bg-daark  fs-5  d-flex":"navbar navbar-expand-lg fixed-top p-4  fs-5  d-flex "} id="navBar" >
        <div className="container">
        <a className="navbar-brand" href="#">
            <img src={logo} alt=" l0g0" height="30px"  className="d-inline-block align-text-top"/>
        </a>
            <button className="navbar-toggler " style={ { color: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <MenuRoundedIcon/>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  d-flex gap-3 align-items-center">
                <li className="nav-item ">
                <a className={activLink  === "home" ? "nav-link active text-light ":"nav-link  text-light "} onClick={()=>activNav("home")} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className={activLink  === "skills" ? "nav-link nav-active text-light ":"nav-link  text-light "} onClick={()=>activNav('skills')}  href="#skills">skills</a>
                </li>
                <li className="nav-item">
                <a className={activLink  === "projects" ? "nav-link active text-light ":"nav-link  text-light "} onClick={()=>activNav("projects")}  href="#projects">projects</a>
                </li>
                
                <ul id="social-links" className="  d-flex gap-2 flex-wrap mb-2 mb-lg-0 ">
                    <li className="nav-item rounded-circle  " >
                        <a className="nav-link text-light " href="https://www.linkedin.com/in/ahmed-abu-seta-67436a21b/"><FontAwesomeIcon icon={faLinkedinIn} className="social-icon" /></a>
                    </li>
                    <li className="nav-item rounded-circle ">
                        <a className="nav-link text-light" href="#"><FontAwesomeIcon icon={faFacebookF} className="social-icon"/></a>
                    </li>
                    <li className="nav-item rounded-circle  p-3">
                        <a className="nav-link text-light" href="#"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a>
                    </li>
                    <button id="connect-btn" className={scrolled?"position-relative border border-light p-3 pt-2 pb-2 fw-bold fs-6 text-light ":"position-relative border border-light p-4 pt-3 pb-3 fw-bold fs-5 text-light "} > let's connect</button>
                </ul>
            </ul>
            </div>
        </div>
    </nav>
    )
}
export default Header