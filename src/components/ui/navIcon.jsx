import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavIcon({path,icon}) {

  return (
    <li className="nav-item rounded-circle  p-3">
      <a className="nav-link text-light" href={path}>
        <FontAwesomeIcon icon={icon} className="social-icon" />
      </a>
    </li>
  )
}

export function NavText ({path='#',activNav,activLink,text}){

  return(
    <li className="nav-item">
    <a className={activLink  === text ? "nav-link nav-active text-light ":"nav-link  text-light "}
    onClick={()=>activNav(text)}  href={path}>{text}</a>
    </li>
  )
}