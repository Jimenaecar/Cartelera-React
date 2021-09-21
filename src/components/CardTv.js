import {Link} from "react-router-dom";
import "../components/css/styles.css";

const CardTv = (props) => {
    
    return ( 
        <div className="col-lg-3 col-auto">
            <div className="card image-container" style={{width: "18rem"}}>
                <img src= {'https://image.tmdb.org/t/p/w500/'+props.imageTv} className="card-img-top"  alt=""/>
            <div className="card-body cardInfo overlay d-flex align-items-center">
              <Link to={"/show/"+props.idTv} style={{ textDecoration: "none", color:"white"}} > <h5 className="card-title cardText" style={{ fontWeight:"bolder"}}> {props.nameTv} </h5></Link>
                <span className="card-text cardAve">{props.vote_averageTv}</span>
            </div>
          </div>
        </div>
     );
}
 
export default CardTv;