import React from 'react';
import Movies from '../Components/Movies'

const MoviesList = ({films}) => {
    const movieNodes = films.map(films => {
        return(
            <Movies key={films.id} url={films.url} >{films.name}</Movies>
        )
    })

    return (
        <body className="movies-list">
        {movieNodes}
        </body>
    )
}

export default MoviesList;