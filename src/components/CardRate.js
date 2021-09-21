import "../components/css/styles.css";
import {Link} from "react-router-dom";

const CardRate = (props) => {
    
    return ( 
      
  <div className="col-auto row flex-nowrap cards-container p-2">
    <div className="col-auto card-block ">
        <div className="image-container" style={{width: "17rem"}}>
  <img src={'https://image.tmdb.org/t/p/w200'+props.imageRate} className="card-img-top rounded" alt="..."/>
  <div className="card-body cardInfo overlay d-flex">
  <Link to={"/popular/"+props.idRate} style={{ textDecoration: 'none', color:"white" }} > <h5 className="card-title cardText" style={{fontWeight:"bolder"}}> {props.nameRate} {props.titleRate} </h5></Link>
    <span className=" cardAve">{props.vote_averageRate}</span>
    </div>
  </div>
  </div>
</div>

     );
}
 
export default CardRate;