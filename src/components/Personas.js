import React, { useState, useEffect } from 'react';
import CardPersonas from './CardPersonas';

const Personas = () => {

    const [personas,setPersonas]= useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY_TMDB}`)
        .then(response => response.json())
        .then(data => setPersonas(data.results));
    },[])
   
    return ( 
        <div className="">
            <div className="row" style={{display:"flex", flexFlow: "rowWrap", contentAligh: "center"}}>
            {personas.map(item=> <CardPersonas namePers ={item.name} place_of_birth ={item.place_of_birth} birthday ={item.birthday} imagePers ={item.profile_path} idPers={item.id}
            />)}  
            </div>
           
        </div>
     );
}
export default Personas; 