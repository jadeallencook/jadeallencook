import './App.scss';
import Navigation from './components/Navigation';
import Special from './components/Special';
import Header from './components/Header';
import Categories from './components/Categories';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Gallary from './components/Gallary';
import Footer from './components/Footer';
import { AppProvider } from './AppContext';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Special />
        <Navigation />
        <Header />
        <Categories />
        <Projects />
        <Resume />
        <Gallary />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
