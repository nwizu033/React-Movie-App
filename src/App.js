import './App.css';
import MovieBoard from './MovieBoard';
// import axios from 'axios';
import {useEffect, useState} from 'react';

// 5a2f10fb
const API_URL = 'http://www.omdbapi.com/?apikey=5a2f10fb';
function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies]= useState([]);

   const searchMovies = async (title) => {
      const res = await fetch(`${API_URL}&s=${title}`);
      const result = await res.json();
      console.log(result)

      setMovies(result.Search)

  }

  useEffect(() => {
    searchMovies('batman')
  }, []);


  return (
      <div className='container'>
        <h1>Welcome To FilmLand</h1>

        <div className='search'>
          <input type="text"
            value= {search}
            placeholder='Search for a movie'
            onChange= {(e) => setSearch(e.target.value)}
          />
          {/* <h1 onClick={() => searchMovies(search)}>∆</h1> */}
          <i class="fa fa-search" aria-hidden="true" 
           onClick={() => searchMovies(search)}></i>
        </div>

        {movies?.length>0 ? (<div className='movieContainer'>
              {movies.map((movie) => (<MovieBoard movie = {movie} />
          ))}
        </div>): (
            <div className='empty'>
              <h2>No result found</h2>
            </div>
        )}
       
      </div>  
  );
}

export default App;
