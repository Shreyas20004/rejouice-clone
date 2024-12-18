import './App.css';
import './components/Navbar.css';
import Mouse from './components/Mouse';
import Navbar from './components/Navbar';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './components/locomotive-scroll.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  

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