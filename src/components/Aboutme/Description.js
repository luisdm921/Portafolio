import "../../Description.css";
export default function Description() {
  return (
    // <section id="aboutme">
    <div className="mainD" >
      <div id="aboutme" className="descriptionTitle">
        <h1>About me</h1>
      </div>
      <div className="descriptionHead">
        <p>
          Hello <span className="name">I´m Luis Dominguez </span> I have a passion for
          taking challenges everyday I see them as an opportunity to get
          experience and improve my personal and professional development, besides I like working with partners because we can learn together and figure out problems faster. 
        </p>
      </div>
      <div className="description">
        <p>
          <span className="strong">Nombre:</span> Luis Francisco Dominguez
          Melendez
        </p>
        <p>
          <span className="strong">Correo:</span> fcodominguez530@gmail.com
        </p>
        <p>
          <span className="strong">Telefono:</span> (+52) 844-584-1876
        </p>
        <p>
          <span className="strong">Direccion:</span> Saltillo,Coahuila,Mexico
        </p>
      </div>
    </div>
    // </section>
  );
  
}
