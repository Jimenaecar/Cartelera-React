import "../components/css/styles.css";
import {Link} from "react-router-dom";

const CardTrend = (props) => {
    
    return ( 
      //<div>
        // <div className="col-lg-3 col-auto">
        //     <div className="card image-container" style={{width: "18rem"}}>
        //         <img src= {'https://image.tmdb.org/t/p/w500/'+props.imageTrend} className="card-img-top" alt=""/>
        //     <div className="card-body cardInfo overlay d-flex align-items-center">
        //       <Link to={"/tendencias/"+props.idTrend} style={{ textDecoration: 'none', color:"white" }} > <h5 className="card-title cardText" style={{fontWeight:"bolder"}}> {props.nameTrend} {props.titleTrend} </h5></Link>
        //         <span className="card-text cardAve">{props.vote_averageTrend}</span>
        //     </div>
        //   </div>
        //</div>
        // </div>
  <div className="col-auto row flex-nowrap cards-container p-2">
    <div className="col-auto card-block ">
        <div className="image-container" style={{width: "17rem"}}>
  <img src={'https://image.tmdb.org/t/p/w200'+props.imageTrend} className="card-img-top rounded" alt="..."/>
  <div className="card-body cardInfo overlay d-flex">
  <Link to={"/tendencias/"+props.idTrend} style={{ textDecoration: 'none', color:"white" }} > <h5 className="card-title cardText" style={{fontWeight:"bolder"}}> {props.nameTrend} {props.titleTrend} </h5></Link>
    <span className=" cardAve">{props.vote_averageTrend}</span>
    </div>
  </div>
  </div>
</div>

     );
}
 
export default CardTrend;