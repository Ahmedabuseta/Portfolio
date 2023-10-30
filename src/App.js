import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import Banner from './components/banner';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Connect from './components/connect';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
