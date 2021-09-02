import "./css/styles.css";
import {Link} from "react-router-dom";

const CardTv = (props) => {
    
    return ( 
        <div className="col s12 m6 l3">
            <div className="card" style={{width: "18rem"}}>
                <img src= {'https://image.tmdb.org/t/p/w500/'+props.imageTv} className="card-img-top" alt=""/>
            <div className="card-body">
              <Link to={"/show/"+props.idTv}> <h5 className="card-title"> {props.nameTv} </h5></Link>
                <p className="card-text"> {props.countryTv}</p>
                <p className="card-text">{props.vote_averageTv}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
     );
}
 
export default CardTv;