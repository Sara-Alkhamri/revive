import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from './pages/clients'
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import hero from "./hero-img1.png";
import { Controller, Scene } from 'react-scrollmagic';




function App() {

  return (
    <div className="App">
      <Controller>
        <Scene duration={600} pin>
          {/* <Nav />
          <Route exact path="/">
            <Hero title='hero section' />
          </Route>
          <Route exact path="/about" >
            <About title={`It's a Team of Two`} who={`Sara and  Prada`} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Footer /> */}
        </Scene>
      </Controller>
    </div>
  );
}

export default App;
