import React, {useState,useEffect} from 'react'; 
import axios from './axios';
import "./row.css"
const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) 
{
    const[movies,setMovies]=useState([]);

    useEffect(() => {
   async function fetchData()
   {
       const request=await axios.get(fetchUrl);

       setMovies(request.data.results);
      //  console.table(request.data.results)
       return request; 
      }       
      fetchData();
  },[fetchUrl]);
  
    
      
    
  return (
    <div>
      <div className='row'></div>
        <h2>{title}</h2>
        <div className='row-container'>
          {/*posters */}
          {movies.map(movie=>(
            <img 
            key={movie.id}
            // to render images in most efficent way,if anything changes in the row not the entire portion is goin to re-render
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            // to print the first row scaled up use css..
            src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
          ))}
        </div>
    </div>
  )
  }
 export default Row;