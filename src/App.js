import NavbarMain from './components/NavbarMain';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './App.css';
import routes from './router/route';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faTruck, faBoxOpen, faChalkboardTeacher, faStore } from '@fortawesome/free-solid-svg-icons';

library.add(faUtensils, faTruck, faBoxOpen, faChalkboardTeacher, faStore);


function App() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      enable:"mobile",
      startEvent: 'DOMContentLoaded',
      offset: 70,
      duration: 800,
      once: false,
      mirror: false,
    });
  }, []);  
  
  
  // Empty dependency array to run only on component mount

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavbarMain />
        <div className="content">
          <Routes>
            {routes.map((x) => (
              <Route key={x.to} path={x.to} element={<x.component />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
