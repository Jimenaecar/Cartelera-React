import React, { useState, useEffect } from 'react';
import CardRate from '../components/CardRate';
import RateTvDetails from '../components/RateDetails';

const RatingTv = () => {
const [rate,setRate]= useState([]);

useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then(data => {setRate(data.results)});
    
},[])


    return (
        <div className="overflow-auto">
            <div className="row">
            <div className="card-cont">
            <div className="trendingSpace" style={{textAlign: 'center', marginTop: "4rem", color: "white"}}>
            {rate.map(item=> <CardRate nameRate={item.original_name} titleRate={item.title} overviewRate ={item.overview} vote_averageRate={item.vote_average} imageRate ={item.poster_path} idRate={item.id}
            />) } 
            </div>
            </div>
            </div>
        </div>
      );
}
 
export default RatingTv;