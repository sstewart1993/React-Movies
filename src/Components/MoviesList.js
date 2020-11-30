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
        <button>
        <a href="https:www.imdb.com/calendar/?region=gb">
        View More Upcoming Releases</a></button>
        </body>
    )
}

export default MoviesList;