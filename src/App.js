import './App.css';

import Home from './containers/Home';
import Header from './containers/Header';
import About from './containers/About';
import Skills from './containers/Skills';
import Education from './containers/Education';
import Work from './containers/Work';
import Footer from './containers/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
