import { Link,} from "react-router-dom";
import "../components/css/styles.css";
import Personas from "../views/Personas";
import PersonasDetails from "./PersonasDetails";


const CardPersonas = (props) => {

    return ( 
            <div className="col-lg-3 col-auto">
                <div className="card image-container" style={{width: "18rem"}}>
                    <img src= {'https://image.tmdb.org/t/p/w500/'+props.imagePers} className="card-img-top" alt=""/>
                <div className="card-body cardInfo overlay d-flex align-items-center justify-content-center">
                  <Link to={"/personas/"+props.idPers} style={{ textDecoration: 'none', color:"white" }} > <h5 className="card-title cardText" style={{fontWeight:"bolder"}} > {props.namePers} </h5></Link>
                    {/* <p className="card-text"> Hola {props.place_of_birth}</p>
                    <p className="card-text">Hola {props.birthday}</p> */}
                </div>
              </div>
            </div>
         );
         
    
}
export default CardPersonas;