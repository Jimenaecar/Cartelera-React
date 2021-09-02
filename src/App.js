import Navbar from "./components/Navbar";
import Peliculas from "./components/Peliculas";
import NotFound from "./components/NotFound";
import Personas from "./components/Personas";
import Programas from "./components/Programas";
import Carousel from "./components/CarouselInicio"
import Inicio from "./views/Inicio";
import MovieDetails from "./components/MovieDetails";
import ShowDetails from "./components/ShowDetails";
import PersonasDetails from "./components/PersonasDetails";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




function App() {

  return (
<Router>
  <Navbar/>
  <Switch>
  
  <Route exact path="/">
    <Inicio/>
    </Route>

    <Route exact path="/peliculas">
    <Peliculas/>
    </Route>

    <Route exact path="/movies/:id">
    <MovieDetails/>
    </Route>

    <Route exact path="/programas-television"> 
    <Programas/>
    </Route>

    <Route exact path="/show/:idTv">
    <ShowDetails/>
    </Route>

    <Route exact path="/personas"> 
    <Personas/>
    </Route>

    <Route exact path="/personas/:idPers"> 
    <PersonasDetails/>
    </Route>

    <Route path="*"> 
    <NotFound/>
    </Route>

  </Switch>
</Router>








    
  );
}

export default App;
