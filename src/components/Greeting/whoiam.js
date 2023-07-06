import {FaLinkedin, FaFolder, FaGithub} from "react-icons/fa";
import yo from "../../img/avatar2.png"
import pdf from "../../CV/Luis-Francisco-Dominguez-Melendez-CV.pdf"
export default function Whoiam() {
  return (
    <div className="main-hello">
      <div className="container">
        <div className="hello">
          <p className="introduction">
            Hello!
            <br />
            <span className="big-words">
              I'm Luis Dominguez
              <br />
            </span>
            <span className="position">
              Computer Systems Enginner/Web Developer <br />
              <br />
            </span>
            <span className="description">
              Thank you so much for be here and take a moment to visit my web-page, please go ahead and know me!!!. 
            </span>
          </p>
          <div className="buttons-links">
       
          <a href={pdf} target="_blank" className="button">
           <FaFolder></FaFolder> CV
          </a>
          <a href="https://www.linkedin.com/in/luis-dominguez-877396260/" target="_blank" className="button">
           <FaLinkedin></FaLinkedin> Linkedin
          </a>
          <a href="https://github.com/luisdm921" target="_blank" className="button">
           <FaGithub></FaGithub> Github
          </a>
        </div>
        </div>
        <div className="photo">
          <img src={yo} alt=""/>
        </div>
        
      </div>
    </div>
  );
}
