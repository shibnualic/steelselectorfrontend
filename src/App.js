
import React from 'react';
import './App.css';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <SplashScreen />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
