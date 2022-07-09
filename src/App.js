import './App.scss';
import Navigation from './components/organisms/Navigation';
import Special from './components/organisms/Special';
import Header from './components/organisms/Header';
import Categories from './components/organisms/Categories';
import Projects from './components/organisms/Projects';
import Resume from './components/organisms/Resume';
import Gallery from './components/organisms/Gallery';
import Footer from './components/organisms/Footer';
import Loading from './components/organisms/Loading';
import { AppProvider } from './AppContext';
import 'font-awesome/css/font-awesome.min.css';
import useHomepage from './hooks/useHomepage';

function App() {
  const { loaded, header, gallery, playlists, experience, projects } =
    useHomepage();

  return loaded ? (
    <div className="App">
      <AppProvider>
        <Special />
        <Navigation />
        {header && <Header header={header} />}
        {experience && <Resume experience={experience} />}
        {projects && <Projects projects={projects} />}
        {playlists && <Categories playlists={playlists} />}
        {gallery && <Gallery gallery={gallery} />}
        <Footer />
      </AppProvider>
    </div>
  ) : (
    <Loading />
  );
}

export default App;
