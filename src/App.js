import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from './pages/clients'
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import hero from "./hero-img1.png";
import Process from './components/Process'
import ContactForm from './contact/index'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    /* background-color: #8EBBDF; */
    /* opacity: 0.5; */
  /* background-image: url("../yellow.jpg") no-repeat;  */
  background-image: linear-gradient(#ff5757 50%, #ffffff 0%);
  
  }
  
  .panel.yellow {
    /* background-color: white; */
  background-image: linear-gradient(to right, #ffffff 70%,  #febd01 0%);
   
  }
  
  .panel.red {
  background-image: linear-gradient(to left, #ffffff 50%,  #D9D9D9 0%);
  }
  
  .panel.bordeaux {
    background-color: white;
  }
`;


const App = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          {/* <Nav /> */}
          <section className="panel blue"><Route exact path="/">
            <Nav />
            <Hero title='hero section' />
          </Route>
          </section>

          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel yellow">
              {/* <About title={`It's a Team of Two`} who={`Prada`} /> */}
              <Services />
            </section>
          </Tween>

          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel red">
              {/* <Clients /> */}
              <Process />
            </section>
          </Tween>

          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux">
              <ContactForm />
              {/* <Footer /> */}
            </section>
          </Tween>

        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);


export default App;
