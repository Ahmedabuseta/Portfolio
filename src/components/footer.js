import { TextField } from "@mui/material";
import './footer.css'
import logo from '../assets/img/logo.svg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function Footer (){
const date =new Date;


    return(
        <div id='footer'  >
            <div className="container-md d-flex flex-column  ">
                <div style={{transform:'translateY(-50%)',borderRadius:'25px'}} 
                className="p-lg-5 p-3  bg-light text-dark  text-capitalize flex-wrap d-flex justify-content-center align-items-center gap-3" >
                    <h3 className="col-xs-12 col-lg-4 wrap p-3" >
                        see my project at once & leave here your e-mail address , dear
                    </h3>
                    <div className="col-xs-12 col-lg-4 position-relative">
                    <input id="outlined-basic" className="w-100   "style={{padding:'14px'}}  placeholder='email adress'/>
                    <button className="btn ps-4 pe-4  text-light position-absolute end-0 " style={{background:' linear-gradient( to right,#973489,#5f30ae )',transform:'translate(-5%,4px)',padding:'11px'}} >submit</button>
                    </div>
                </div>
                <div className=" d-flex flex-row justify-content-between align-items-center gap-4">
                    <img src={logo} />
                    <div className="social d-flex flex-column flex-wrap ">
                    <ul id="social-links" className="  d-flex gap-2 flex-wrap  ">
                    <li className="nav-item rounded-circle  " >
                        <a className="nav-link text-light " href="https://www.linkedin.com/in/ahmed-abu-seta-67436a21b/"><FontAwesomeIcon icon={faLinkedinIn} className="social-icon" /></a>
                    </li>
                    <li className="nav-item rounded-circle ">
                        <a className="nav-link text-light" href="#"><FontAwesomeIcon icon={faFacebookF} className="social-icon"/></a>
                    </li>
                    <li className="nav-item rounded-circle  p-3">
                        <a className="nav-link text-light" href="#"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a>
                    </li>
                </ul>
                        <p className="text-capitalize">{date.getFullYear()} &copy; all rights reserved by ahmed ahmed abuseta</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Footer;