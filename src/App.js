import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Nav />
      <Hero />
      {/* <Route path="/about" component={About} />
      <Services />
      <Contact />
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
