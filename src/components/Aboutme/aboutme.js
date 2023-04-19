import "../../aboutme.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBrain,
  FaUserCheck,
  FaRegCalendarCheck,
  FaFlag,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
export default function AboutMe() {
  useEffect(()=>{
    Aos.init({duration:1500});
  },[])
  return (
    <>
      <div className="mainA">
        <div className="skills">
          <div className="hard" data-aos = "zoom-in">
            <ul>
              <li className="sub">Hard skills</li>
              <li>
                {" "}
                <FaHtml5 style={{ color: "#F33838", size: "20px" }} /> HTML
              </li>
              <li>
                {" "}
                <FaCss3Alt style={{ color: "#286BE6" }} /> CSS
              </li>
              <li>
                {" "}
                <SiJavascript style={{ color: "#EBEA68" }} /> JavaScript
              </li>
              <li>
                {" "}
                <FaReact style={{ color: "#4DB3B6" }} /> React
              </li>
              <li>
                {" "}
                <FaNodeJs style={{ color: "#458958" }} /> Nodejs
              </li>
            </ul>
          </div>
          <div className="soft" data-aos = "zoom-in">
            <ul>
              <li className="sub">Soft skills</li>
              <li>
                <FaBrain style={{ color: "#DE92C4" }} /> Self-taught
              </li>
              <li>
                {" "}
                <GiTeamIdea style={{ color: "#4B9BBA" }} />
                TeamWork
              </li>
              <li>
                {" "}
                <FaUserCheck style={{ color: "#EC864E" }} />
                Responsibility
              </li>
              <li>
                {" "}
                <FaFlag style={{ color: "#9657AB" }} />
                Leadership
              </li>
              <li>
                {" "}
                <FaRegCalendarCheck style={{ color: "#529DAB" }} />
                Time management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
