// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Connect from "./components/contact/connect";
import Footer from "./components/footer/footer";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner/banner";
import ParticlesBg from "./components/utilities/particles-bg";
import AnimatedCursor from "react-animated-cursor";

// import ResponsiveAppBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <AnimatedCursor/>
      <ParticlesBg />
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
