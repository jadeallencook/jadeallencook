import './App.scss';
import Navigation from './components/Navigation';
import Special from './components/Special';
import Header from './components/Header';
import Categories from './components/Categories';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { AppProvider } from './AppContext';
import 'font-awesome/css/font-awesome.min.css';
import useHomepage from './hooks/useHomepage';

function App() {
  const {
    loaded,
    header,
    gallery,
    playlists,
    experience,
    projects,
  } = useHomepage();

  return loaded ? (
    <div className="App">
      <AppProvider>
        <Special />
        <Navigation />
        {header && <Header header={header} />}
        {playlists && <Categories playlists={playlists} />}
        {projects && <Projects projects={projects} />}
        {experience && <Resume experience={experience} />}
        {gallery && <Gallery gallery={gallery} />}
        <Footer />
      </AppProvider>
    </div>
  ) : (
    <Loading />
  );
}

export default App;
