import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo-1.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithub, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavIcon,NavText } from "../ui/navIcon";
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
    } 
    const [toggle, setToggle] = useState(false);
    console.log(toggle);

    return(
    <nav className={scrolled?"navbar navbar-expand-lg fixed-top p-1 bg-daark  fs-5  d-flex":"navbar navbar-expand-lg fixed-top p-4  fs-5  d-flex "} id="navBar" >
        <div className="container">
        <a className="navbar-brand" href="#">
            <img src={logo} alt=" l0g0" height="30px"  className="d-inline-block align-text-top"/>
        </a>
            <button className="navbar-toggler ms-auto " onClick={()=>setToggle(!toggle)} style={ { color: 'white' }} type="button"  >
                <MenuRoundedIcon/>
            </button>
            <div className={toggle ? 'show collapse':''} id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  d-flex gap-3 align-items-center">
                <NavText  activLink={activLink} activNav={activNav} text={'Home'}/>
                <NavText path="#skills" activLink={activLink} activNav={activNav} text={'skills'}/>
                <NavText path="#projects" activLink={activLink} activNav={activNav}text={'projects'}/>
                
                <ul id="social-links" className="  d-flex gap-2 flex-wrap mb-2 mb-lg-0 ">
                    <NavIcon path={"https://www.linkedin.com/in/ahmed-abu-seta-67436a21b/"} icon={faLinkedinIn} />
                    <NavIcon path={'#'} icon={faFacebookF}/>
                    <NavIcon path={'#'} icon={faGithub}/>
                    <button id="connect-btn"
                     className={scrolled?"position-relative border border-light p-3 pt-2 pb-2 fw-bold fs-6 text-light "
                     :"position-relative border border-light p-4 pt-3 pb-3 fw-bold fs-5 text-light "} > let's connect</button>
                </ul>
            </ul>
            </div>
        </div>
    </nav>
    )
}
export default Header