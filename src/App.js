import './App.css';
import AboutUs from './components/AboutUs';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Objectives from './components/Objectives';
import NextEvent from './sections/NextEvent';
import PastEvent from './sections/PastEvent';
import Team from './sections/Team';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <AboutUs />
      <Objectives />
      <NextEvent />
      <PastEvent />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
