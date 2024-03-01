
import './App.css';
import NavbarComponent from "./Components/NavbarComponent";
import HeroComponent from "./Components/HeroComponent";
import CallToActionComponent from "./Components/CallToActionComponent";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <div className="App">
        <NavbarComponent />
        <HeroComponent />
        <CallToActionComponent />
        <FooterComponent />
    </div>
  );
}

export default App;
