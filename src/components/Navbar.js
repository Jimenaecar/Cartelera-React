import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg text-light bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand text-white" href="#">Inicio</Link>
    <Link to="/peliculas" className="navbar-brand text-white" href="#">Películas</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/programas-television" className="nav-link text-white active" aria-current="page" href="#">Programas de televisión</Link>
        <Link to="/personas" className="nav-link text-white" href="#">Personas</Link>
        <Link to="/not-Found" className="nav-link text-white" href="#">Más</Link>
      </div>
    </div>
  </div>
</nav>
        </div>

     );
}
 
export default Navbar;