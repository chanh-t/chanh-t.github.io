import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import DynamicText from './DynamicTxt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* If you have a navigation bar or a logo, place it here */}
      </header>
      <main className="Main-content">
        <h1 className="About-title">About Me</h1>
        <p>
          I am a <DynamicText />
        </p>
        <p>
          Current undergraduate at the University of Washington studying Computer Science.
        </p>
        {/* Rest of your content */}
      </main>
      {/* Footer component could go here */}
      <Footer />
    </div>
  );
}

export default App;
