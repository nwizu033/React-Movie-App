import React from 'react';

function MovieBoard({movie: {Year,Poster,Title,Type,imdbID}}) {
  return (
    <div className='movie' key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>

        <div>
          <img src={Poster !=='N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title}/>
        </div>

        <div>
            <h3>{Type}</h3>
          <span>{Title}</span>
        </div>
    </div> 
  )
}

export default MovieBoard