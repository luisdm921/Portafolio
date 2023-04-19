import weather from "../../img/Wheather.jpg";
import quote from "../../img/quote.jpg";
import todo from "../../img/todo.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
export default function CardProject(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="card" data-aos = "flip-up">
      <img className="imagen" src={props.project.image} alt="weather" />
      <div className="info">
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
        <a href={props.project.link} className="btn" target="_blank">
          GO
        </a>
      </div>
    </div>
  );
}
