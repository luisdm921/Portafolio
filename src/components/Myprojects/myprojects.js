import "../../Myprojects.css";
import weather from "../../img/Wheather.jpg";
import quote from "../../img/quote.jpg";
import todo from "../../img/todo.jpg";
import coffee from "../../img/coffe.jpg";
import music from "../../img/festival.jpg";
import CardProject from "../Myprojects/cardProject";
export default function MyProjects() {
  const proyects = [
    {
      id: 1,
      title: "Weather",
      description: "A web application where you can find your city weather",
      image: weather,
      link: "https://luisdm-weather.netlify.app/",
    },
    {
      id: 2,
      title: "Quote",
      description:
        "A web application where you can find a random quote by different authors, share it on twitter",
      image: quote,
      link: "https://random-quote-by-luisdm.netlify.app/",
    },
    {
      id: 3,
      title: "List-to-do",
      description: "Manage your daily routine with this application",
      image: todo,
      link: "https://luisdm-list-to-do.netlify.app/",
    },
    {
      id: 4,
      title: "Coffe",
      description: "Manage your coffee shop",
      image: coffee,
      link: "https://luisdm-coffee.netlify.app/",
    },
    {
      id: 5,
      title: "festival",
      description: "Manage your festival",
      image: music,
      link: "https://musicfestbyluis.netlify.app/",
    },
  ];
  return (
    // <section id="project">
    <div className="mainM" >
      <div className="myProjects" id="project">
        <h1>-My Projects-</h1><br />
      </div>
      <div className="containerM">
        {proyects.map((x) => {
          return <CardProject key={x.id} project={x}></CardProject>;
        })}
      </div>
    </div>
    // </section>
    
  );
}
