import './App.css';
import Greeting from './components/Greeting/greeting';
import AboutMe from './components/Aboutme/aboutme';
import MyProjects from './components/Myprojects/myprojects';
import Description from './components/Aboutme/Description';
function App() {
  return (
   <>
   <Greeting></Greeting>
   <Description></Description>
   <AboutMe></AboutMe>
   <MyProjects></MyProjects>
   </>
  )
}

export default App;
