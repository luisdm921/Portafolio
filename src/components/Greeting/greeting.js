import Header from "./header";
import Whoiam from "./whoiam";
import "../../greeting.css";

export default function Greeting() {
  return (
    // <section id="greeting">
    <div className="mainG" id="greeting">
      <Header></Header>
      <Whoiam></Whoiam>
    </div>
    // </section>
  );
}
