
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';
import BusinessActivities from './components/BusinessActivities/BusinessActivities';
import Career from './components/Career/Career';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Ourcompany from './components/Our-company/Ourcompany';
import GoalandVision from './components/Goal and Vision/GoalandVision';

function App() {
  return (
    < >
      <NavBar />
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/businessactivities" element={<BusinessActivities/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />
     
     
      </Routes>

   
    </>
  );
}

export default App;
