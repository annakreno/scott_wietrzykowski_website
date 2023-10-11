import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
// import Credits from '../Credits/Credits';
import Equipment from '../Equipment/Equipment';
import Work from '../Work/Work';
import NotFound from '../NotFound/NotFound';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <main className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          {/* <Route path="/credits" element={ <Credits /> } /> */}
          <Route path="/equipment" element={ <Equipment /> } />
          <Route path="/work" element={ <Work /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </main>
  );
}
