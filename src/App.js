import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Education from './components/educationservice/Education';
//import Resume from './components/resume/Resume';
//import Portfolio from './components/portfolio/Portfolio';
import Habilidades from './components/habilidadesprice/Habilidades';
import Expe from './components/experiencestest/Expe';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Education/>
      <Habilidades/>
      <Expe/>
      <Contact/>
    </main>
    </>
  );
};
 
export default App;

