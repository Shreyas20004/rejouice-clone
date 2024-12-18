import './App.css';
import './components/Navbar.css';
import Mouse from './components/Mouse';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import './components/locomotive-scroll.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <>
      <div id='main'>
        <Navbar />
        <Mouse />
        <Page1 />
        <Page2 />
      </div>
    </>
  );
}

export default App;