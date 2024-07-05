import React from 'react';
import './App.css'; // Import your CSS file
// cp -r build/* .
// npm run build
// npm run deploy
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
          <h1 className="section-header">About Me</h1>
          <div className="about-content">
            <img src={"./profile-photo.jpg"} alt="nothing here?" title='A photo of me in 2022 when I was an undergraduate' className="profile-photo" />
            <div className="about-text">
              <p>
              I am a recent undergraduate at the University of Washington with a degree in Computer Science.
              </p>
            </div>
          </div>
        </section>
        
        <section id="projects" className="projects-section">
          <h1 className="section-header">Projects</h1>

          <div className="projects-list">
            <div className="project-item">
              <div class="header-container">
                <h1 class="header1">Budget on Google Sheets (In Progress)</h1>
                <h1 class="header2">June 2024 - Present</h1>
              </div>
              <h3>Description</h3>
              <p>
                Keeps track of all your recent transactions and gives you useful information about your spending habits.
              </p>

              <h3>Software and Tools</h3>
              <ul class="custom-list">
                <li>Languages: Google Script</li>
              </ul>
              <h3>Links</h3>
              <ul class="custom-list">
                <li>Link to sheet onced finished!</li>
              </ul>
            </div>



            <div className="project-item">
              <div class="header-container">
                  <h1 class="header1">Poker On Roblox (In Progress)</h1>
                  <h1 class="header2">June 2024 - Present</h1>
              </div>
              <h3>Description</h3>
              <p>A simple poker game made on Roblox inspired by PokerNow.</p>

              <h3>Software and Tools</h3>
              <ul class="custom-list">
                <li>Languages: Lua</li>
              </ul>
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