import React from 'react';

const Movies = ({children, url}) => {
    return(
        <div className="movies">
        <li><a href={url}>{children}</a></li>
        </div>
    )
}

export default Movies;