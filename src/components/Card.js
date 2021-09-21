import { Link} from "react-router-dom";
import "../components/css/styles.css";




const Card = (props) => {
   
    
    return ( 
      
        <div className="col-lg-3 col-auto">
            <div className="card image-container" style={{width: "18rem"}}>
                <img src= {'https://image.tmdb.org/t/p/w500/'+props.image} className="card-img-top" alt=""/> 
            <div className="card-body cardInfo overlay d-flex align-items-center">
              <Link style={{textDecoration: 'none', color:"white" }} to={"/movies/"+props.id}> <h5 className="card-title cardText" style={{fontWeight:"bolder"}} >{props.title} {props.name}</h5></Link> 
                <span className="card-text cardAve"> {props.vote_average}</span>
                
            </div>
          </div>
        </div>
     
     );
    
}
  
 
export default Card;