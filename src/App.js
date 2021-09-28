import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from './pages/clients'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Nav />
      <Hero />
      {/* <Switch>
        <Route path="/about" component={About} />

        <Route path="/services" component={Services} />
      </Switch> */}
      <Services />
      <Clients />
      {/* <Contact /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
