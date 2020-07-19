import React from 'react';
import logo from './logo.jpg';
import './Main.css';

function App() {
  return (

      <div className="App">
        <header className="mainHeader">
          <a className="logo" href="/">
            <img src={logo} className="Adm-logo" alt="logo" />
          </a>
          <div class="headerNavMenu">
              <navigation>
                  <a class="" href="/feed">Feed</a>
                  <a class="" href="/events">Events</a>
                  <a class="" href="/music">Music</a>
                </navigation>
          </div>
          <a className="bookNow" href="mailto:admtracks@gmail.com">
            Book Now
          </a>
        </header>
      </div>

  );
}

export default App;
