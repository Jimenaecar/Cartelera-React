import React, { useState, useEffect } from 'react';
import CardTv from '../components/CardTv';

const Programas = () => {
const[shows,setShows]= useState([]);


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=66fe2d4dcf98813e405cc05181238577`)
        .then(response => response.json())
        .then(data => setShows(data.results));
        console.log(shows);
    },[])
    
    return (  
        <div className="">
            <div className="row" style={{margin: "3rem", marginTop:"0.5rem",marginBottom:"1rem" ,padding: "3rem" }}>
            {shows.map(item=> <CardTv nameTv ={item.original_name} countryTv ={item.origin_country} seasonTv={item.season_number} vote_averageTv={item.vote_average} imageTv ={item.poster_path} idTv={item.id}
            />) } 
            </div>
        </div>
    );
}
 
export default Programas;
