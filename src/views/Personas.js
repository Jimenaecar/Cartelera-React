import React, { useState, useEffect } from 'react';
import CardPersonas from '../components/CardPersonas';

const Personas = () => {

    const [personas,setPersonas]= useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then(response => response.json())
        .then(data => setPersonas(data.results));
    },[])
   
    return ( 
        <div className="">
            <div className="row" style={{margin: "3rem", marginTop:"0.5rem", marginBottom:"1rem" ,padding: "3rem" }}>
            {personas.map(item=> <CardPersonas namePers ={item.name} place_of_birth ={item.place_of_birth} birthday ={item.birthday} imagePers ={item.profile_path} idPers={item.id}
            />)}  
            </div>
           
        </div>
     );
}
export default Personas; 