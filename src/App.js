import Header from './components/Header';
import './App.scss';
import Experience from './components/Experience';
import Applications from './components/Applications';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Applications />
      <Companies />
      <Tutorials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
