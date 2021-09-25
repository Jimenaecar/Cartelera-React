import Navbar from "./components/Navbar";
import Peliculas from "./views/Peliculas";
import NotFound from "./components/NotFound";
import Personas from "./views/Personas"
import Programas from "./views/Programas";
import Carousel from "./components/Carousel"
import Inicio from "./views/Home";
import MovieDetails from "./components/MovieDetails";
import ShowDetails from "./components/ShowDetails";
import PersonasDetails from "./components/PersonasDetails";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Trending from "./views/Trending";
import TrendDetails from "./components/TrendDetails";
import AddFavorites from "./components/AddFavorites";
import RateDetails from "./components/RateDetails";
import RatingTv from "./views/RatingTv";




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

    <Route exact path="/tendencias"> 
    <Trending/>
    </Route>

    <Route exact path="/tendencias/:idTrend"> 
    <TrendDetails/>
    </Route>

    <Route exact path="/popular"> 
    <RatingTv/>
    </Route>

    <Route exact path="/popular/:idRate"> 
    <RateDetails/>
    </Route>

    <Route path="*"> 
    <NotFound/>
    </Route>

  </Switch>
</Router>

 






    
  );
}

export default App;
