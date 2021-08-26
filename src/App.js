import Navbar from "./components/Navbar";
import Peliculas from "./components/Peliculas";
import NotFound from "./components/NotFound";
import Personas from "./components/Personas";
import Programas from "./components/Programas";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {

  return (
<Router>
  <Navbar/>
  <Switch>
    
    <Route exact path="/">
    <Peliculas/>
    </Route>

    <Route exact path="/programas-television"> 
    <Programas/>
    </Route>

    <Route exact path="/personas"> 
    <Personas/>
    </Route>

    <Route path="*"> 
    <NotFound/>
    </Route>

  </Switch>
</Router>








    
  );
}

export default App;
