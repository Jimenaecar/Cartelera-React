// import React, { useState, useEffect } from 'react';

// const Search = () => {
//     const[search,setSearch]= useState([]);
//     useEffect(()=>{
//         fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
//         .then(response => response.json())
//         .then(data => setSearch(data.results));
        
//     },[])

//     return ( 
//         <div>
//             <div className="" style={{margin: "3rem", marginTop:"0.5rem",marginBottom:"1rem" ,padding: "3rem" }}>
//             <div className="row" style={{display:"flex", flexFlow: "rowWrap", contentAligh: "center"}}>
//             {search.map(item=> <Card title ={item.original_title} release_date ={item.release_date} vote_average ={item.vote_average} image ={item.poster_path} id={item.id}
//             />) }  
//             </div>
//             </div>
//         </div>
//      );
// }
 
// export default Search;