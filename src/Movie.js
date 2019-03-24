import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';


function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Colums">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Colums">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                <LinesEllipsis 
                    text={synopsis}
                    maxLine='3'
                    ellipsis=' ...'
                    trimRight
                    baseOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title_english:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
}

MoviePoster.prototypes = {
    poster: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}

export default Movie;
