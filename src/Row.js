import React, { useState, useEffect } from 'react';
import axios from './axios';
import './row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const baseurlimage = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchurl, islarge }) => {
    const [movies, setmovies] = useState([])
    const [trailerUrl, settrailerUrl] = useState('')

    useEffect(() => {
        async function fetch() {
            const request = await axios.get(fetchurl)
            setmovies(request.data.results);
            // return request   
        }
        fetch()

    }, [fetchurl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleclick = (movie) => {
        if (trailerUrl) {
            settrailerUrl("")
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlparams = new URLSearchParams(new URL(url).search)
                    settrailerUrl(urlparams.get("v"))
                })
            // .catch((error) => console.log(error))
        }
    }

    return (
        <div className='row' >
            <h2 className='row__title' >{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img onClick={() => handleclick(movie)} className={`row__poster ${!islarge && "row__posternolarge"}`} key={movies.id} src={`${baseurlimage}${islarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>

    );
}

export default Row;
