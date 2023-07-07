import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <header className="my-4">
        <h1>My Portfolio</h1>
      </header>

      <nav className="my-4">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#about">
              <i className="fas fa-user"></i> About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              <i className="fas fa-briefcase"></i> Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume">
              <i className="fas fa-file-alt"></i> Resume
            </a>
          </li>
        </ul>
      </nav>

      <section id="portfolio" className="my-4">
        <h2>Portfolio</h2>
        <div className="image-grid">
          <a href="https://github.com/rhodemc/tacod">
            <img src="https://images.unsplash.com/photo-1688233600351-47254bfca479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Project 1" />
          </a>
          <a href="https://github.com/rhodemc/Concert-Compass">
            <img src="https://images.unsplash.com/photo-1688410053066-efae78ae17ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Project 2" />
          </a>
          <a href="https://github.com/pchandler858/Project-3">
            <img src="https://images.unsplash.com/photo-1679608328234-ff27ae9a201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Project 3" />
          </a>
          <a href="https://your-project-link-4">
            <img src="https://images.unsplash.com/photo-1686889251278-17a7253d0e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=687&q=80" alt="Project 4" />
          </a>
        </div>
      </section>

      <section id="about" className="my-4">
        <h2>About Me</h2>
        <p>
          I recently completed a 6-month bootcamp and I'm excited to dive deeper into the coding community. I'm motivated to expand my skills and knowledge in the world of programming.
        </p>
        <p>
          Besides coding, I enjoy working on my 1969 Chevy C20 during my free time. It's a great way for me to relax and indulge in my passion for classic cars.
        </p>
        <p>
          When I'm not coding or tinkering with my truck, you can find me playing video games. It's another way for me to unwind and have some fun.
        </p>
      </section>

      <section id="contact" className="my-4">
        <h2>Contact Me</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>

      <section id="resume" className="my-4">
        <h2>Resume</h2>
        {/* Resume content */}
      </section>

      <footer className="my-4">
        <p>
          <a href="https://github.com/Cxxrupt">
            <i className="fab fa-github"></i> GitHub
          </a>
        </p>
        <p>
          <a href="https://linkedin.com/in/your-linkedin-profile">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </p>
        <p>
          <a href="https://twitter.com/your-twitter-profile">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;