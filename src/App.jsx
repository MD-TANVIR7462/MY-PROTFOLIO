import React from 'react';
import NavBar from './Components/NavBar';
import Particle from './Components/Particle';
import Home from './Pages/Home';
import About from './Pages/About';
import SKills from './Pages/SKills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div>
        <Particle></Particle>
      <NavBar></NavBar>
    
      <Home></Home>
      {/* <About></About> */}
      <SKills></SKills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default App;