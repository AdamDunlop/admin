import React from 'react';
import logo from './logo.jpg';
import './Main.css';

function App() {
  return (

      <div className="App">
        <header className="mainHeader">
          <a class="" href="/">
            <img src={logo} className="Adm-logo" alt="logo" />
          </a>
          <div class="headerNavMenu">
              <navigation>
                  <a class="" href="/projects">Projects</a>
                  <a class="" href="/feed">Feed</a>
                  <a class="" href="/events">Events</a>
                </navigation>
          </div>
        </header>
      </div>

  );
}

export default App;
