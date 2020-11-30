import React from 'react';

const Movies = ({name, children}) => {
    return(
        <div className="movies">
        <li>{children}</li>

        </div>
    )
}

export default Movies;