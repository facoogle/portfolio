import Nav from "./components/Nav/Nav.jsx"
import HomeCard from "./components/HomeCard/HomeCard.jsx";
import './App.css';
import Skills from "./components/Skills/Skills.jsx";

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <HomeCard/>
      <Skills/>
    </div>
  );
}

export default App;
