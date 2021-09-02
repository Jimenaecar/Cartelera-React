import { Link,} from "react-router-dom";
import "./css/styles.css";
import Personas from "./Personas";
import PersonasDetails from "./PersonasDetails";


const CardPersonas = (props) => {

    return ( 
            <div className="col s12 m6 l3">
                <div className="card" style={{width: "18rem"}}>
                    <img src= {'https://image.tmdb.org/t/p/w500/'+props.imagePers} className="card-img-top" alt=""/>
                <div className="card-body">
                  <Link to={"/personas/"+props.idPers}> <h5 className="card-title"> {props.namePers} </h5></Link>
                    <p className="card-text"> Hola {props.place_of_birth}</p>
                    <p className="card-text">Hola {props.birthday}</p>
                </div>
              </div>
            </div>
         );
    
}
export default CardPersonas;