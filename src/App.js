import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-title">
          <h1>init is coming</h1>
          <p>The start of something new</p>
        </div>
        <div className="app-header-nav">
          <a href="#" className="app-header-link">Register now</a>
        </div>
      </header>
      <nav className="app-nav">
        <div className="app-nav-logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIHVW11RADUI3PcX7P_IFvk_E-6pv5ArK8A&s" alt="Appwrite Logo" />
        </div>
        <ul className="app-nav-links">
          <li><a href="#">Docs</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Integrations</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <div className="app-nav-actions">
          <a href="#" className="app-nav-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Star on GitHub</span>
            <span className="app-nav-action-count">42.8K</span>
          </a>
          <a href="#" className="app-nav-action app-nav-action-primary">Get started</a>
        </div>
      </nav>
      <main className="app-main">
        <section className="app-section app-section-hero">
          <div className="app-section-content">
            <div className="app-section-title">
              <div className="app-section-title-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h2>New</h2>
              <p>Announcing: A new Init. Faster. Smoother. Better.</p>
              <a href="#" className="app-section-title-link">→</a>
            </div>
            <div className="app-section-headline">
              <h1>Build like a team</h1>
              <h1>of hundreds_</h1>
            </div>
          </div>
        </section>
        <section className="app-section app-section-features">
          <div className="app-section-content">
            <h2>Build your entire backend within minutes and scale effortlessly using Appwrite's open-source platform.</h2>
            <p>Add Authentication, Databases, Functions, Storage, and Messaging to your projects using the frameworks and languages of your choice.</p>
            <a href="#" className="app-section-action app-section-action-primary">Get started</a>
          </div>

          <div className="app-section-image">
            <img src="herologo.png" alt="Hero Image" />
          </div>

        </section>
      </main>
      <footer className="app-footer">
        <div className="app-footer-content">
          <div className="app-footer-logo">
            <img src="https://appwrite.io/static/images/appwrite-logo-white.svg" alt="Appwrite Logo" />
          </div>
          <div className="app-footer-links">
            <a href="#">Acme Corp</a>
            <a href="#">First Appwrite project</a>
          </div>
          <div className="app-footer-actions">
            <a href="#">Support</a>
            <a href="#">Upgrade</a>
            <div className="app-footer-action-user">
              <div className="app-footer-action-user-avatar">
                WO
              </div>
              <div className="app-footer-action-user-name">
                Walter O'Brien
                <span>Acme Corp</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;