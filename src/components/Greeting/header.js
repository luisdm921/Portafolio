import { useState } from "react";
import {Link}from 'react-scroll';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [button, setButton] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const changeButton = ()=>{
    if (window.scrollY >= 80) {
      setButton("Greeting");
    } else {
      setButton("");
    }
  }
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", changeButton);
  return (
    <div className={navbar ? "main-header active" : "main-header"}>
      <div className="menu">
        <ul className="nav-bar">
          <li className="nav">
          <Link className="a" to="greeting" spy={true} smooth={true} offset={-100} duration={500}>Greeting</Link>
          </li>
          <li className="nav">
          <Link className= "a" to="aboutme" spy={true} smooth={true} offset={-100} duration={500}>About me</Link>
          </li>
          <li className="nav">
            <Link className="a" to="project" spy={true} smooth={true} offset={-100} duration={500}>My Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
