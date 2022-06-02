import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Header(){
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
      <a class="navbar-brand" href="https://www.timeanddate.com/worldclock/">Tap 🕔 Time</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active quote"><em>"When you're here, you're drinking."</em></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br/>
    </React.Fragment>
  );
}

export default Header;