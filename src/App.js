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
            <img src={"./profile-photo.jpg"} alt="" title="a pic of me back in 2022 during my sophmore year" className="profile-photo" />
            <div className="about-text">
              <p></p>
            </div>
          </div>
        </section>
        
        <section id="projects" className="projects-section">
          <h1>Projects</h1>
          <div className="projects-list">
            <div className="project-item">
              <h2>Project Title 1</h2>
              <p>Brief description of the project.</p>
            </div>
            <div className="project-item">
              <h2>Project Title 2</h2>
              <p>Brief description of the project.</p>
            </div>
            {/* Add more project items here */}
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;