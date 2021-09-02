import "./css/styles.css";
import {Link} from "react-router-dom";

const CardMovies = (props) => {
    
    return ( 
        <div className="col s12 m6 l3">
            <div className="card" style={{width: "18rem"}}>
                <img src= {'https://image.tmdb.org/t/p/w500/'+props.image} className="card-img-top" alt=""/>
            <div className="card-body">
              <Link to={"/peliculas/"+props.id}> <h5 className="card-title"> {props.name} </h5></Link>
                <p className="card-text"> {props.country}</p>
                <p className="card-text">{props.vote_average}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
     );
}
 
export default CardMovies;