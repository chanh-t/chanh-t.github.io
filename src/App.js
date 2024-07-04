import React from 'react';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section id="about" className="about-section">
          <h1>About Me</h1>
          <div className="about-content">
            <img src={"./profile-photo.jpg"} title='A photo of me in 2022 when I was an undergraduate' className="profile-photo" />
            <div className="about-text">
              <p>I am a recent undergraduate at the University of Washington. I am passionate
                about Software Engineering and 
              </p>
            </div>
          </div>
        </section>
        
        <section id="projects" className="projects-section">
          <h1>Projects</h1>
          <div className="projects-list">
            <div className="project-item">
              <h2>Budget (on Google Sheets)</h2>
              <p>A simple and fun budgeting system that I can easily parse in the future for 
                more information about how I spend my money!
              </p>
            </div>
            <div className="project-item">
              <h2>Poker (On Roblox Studio)</h2>
              <p>A simple poker game made on roblox inspired by PokerNow</p>
            </div>
            {/* Add more project items here */}
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 Chanh Truong. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;