import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect, useState, useRef } from 'react';
import Headers from "./components/header";
import Footer from "./components/footer";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AppContextProvider from './contextApi/AppContext';


function App() {
  const containerClass = "page-container-center";
  const home = "Home";
  const subHome = "SubHome";
  const about = "About";
  const contact = "Contact";

  return (
    <div className="App">
      <AppContextProvider>
      <Router>
        <Headers />
        <Routes>
          <Route path='/' element={ 
            <Home 
            containerClass={containerClass} 
            home={home}
            subHome={subHome}
            />}/>
              {/* <Home 
            containerClass={containerClass} 
            home={home}
            subHome={subHome}
            >
              Hello 
              </Home>}/> */}
          <Route path='/about' element={<About containerClass={containerClass}about={about}/>}/>
          <Route path='/contact' element={<Contact containerClass={containerClass}contact={contact}/>}/>
        </Routes>
        <Footer />
      </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
