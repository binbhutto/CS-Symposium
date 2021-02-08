import './App.css';
import AboutUs from './components/AboutUs';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Objectives from './components/Objectives';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <AboutUs />
      <Objectives />
    </div>
  );
}

export default App;
