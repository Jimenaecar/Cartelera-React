import React, { useState, useEffect } from 'react';
import CardTrend from '../components/CardTrend';

const Trending = () => {
const [trending,setTrending]= useState([]);

useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=66fe2d4dcf98813e405cc05181238577`)
    .then(response => response.json())
    .then(data => setTrending(data.results));
    
},[])


    return (
        <div className="overflow-auto">
            <div className="row">
            <div className="card-cont">
            <div className="trendingSpace" style={{textAlign: 'center', marginTop: "4rem", color: "white"}}>
            {trending.map(item=> <CardTrend nameTrend={item.original_name} titleTrend={item.title} overviewTrend ={item.overview} vote_averageTrend={item.vote_average} imageTrend ={item.poster_path} idTrend={item.id}
            />) } 
            </div>
            </div>
            </div>
        </div>
      );
}
 
export default Trending;