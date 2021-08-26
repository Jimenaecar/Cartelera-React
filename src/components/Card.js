
const Card = (props) => {
    console.log(props);
   
    return ( 
        <div>
            <div className="card" style={{width: "18rem"}}>
  <img src= {'https://image.tmdb.org/t/p/w500/'+props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title} {props.name} </h5>
    <p className="card-text">{props.release_date} {props.country}</p>
    <p className="card-text">{props.vote_average}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
     );
}
 
export default Card;