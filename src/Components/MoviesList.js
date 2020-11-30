import React from 'react';
import Movies from '../Components/Movies'

const MoviesList = ({films}) => {
    const movieNodes = films.map(films => {
        return(
            <Movies key={films.id} >{films.name}</Movies>
        )
    })

    return (
        <div className="movies-list">
        {movieNodes}
        </div>
    )
}

export default MoviesList;