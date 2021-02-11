import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import TextSection from './sections/TextSection';
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
      <TextSection />
      <NextEvent />
      <PastEvent />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
