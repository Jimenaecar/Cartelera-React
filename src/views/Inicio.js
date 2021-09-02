import React, { useState, useEffect } from 'react';
import Carousel from '../components/CarouselInicio';

const Inicio = () => {
  const [inicio,setInicio]= useState([]);
  
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/trending/all/day?/api_key=66fe2d4dcf98813e405cc05181238577")
    .then(response => response.json())
    .then((data) => {setInicio(data.results);
    });
    
},[]);

    return (
        <div>
            <Carousel inicio={inicio}/>
        </div>
      );
}
 
export default Inicio;