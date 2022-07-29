import About from './components/About';
import ContactUs from './components/ContactUs';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks'
import './index.css'
function App() {
  return (
    <>
    
    <Navbar/>
    <Home/>
    <About />
    < Experience/>
    <Projects/>
    <ContactUs/>
    <SocialLinks/>
    
    </>
  );
}

export default App;
