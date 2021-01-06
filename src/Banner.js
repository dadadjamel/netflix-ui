import React, {  useState, useEffect } from 'react';
import axios from './axios';
import requests from './request'
import './banner.css'

const Banner = () => {
    const [movie, setmovie] = useState([])
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(requests.fetchNetflixOriginal)
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
        }
        fetchdata()

    }, [])
    console.table(movie)
    

    return (
        <div className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
                // backgroundRepeat: "no-repeat"
            }} >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className="banner__button" >Play</button>
                    <button className="banner__button" >My list</button>
                </div>
                <p className='banner__des' >{movie?.overview}</p>
            </div>


           


        </div>
    );
}

export default Banner;