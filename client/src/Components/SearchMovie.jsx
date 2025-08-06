import React, { useEffect, useState } from 'react'
import { getTrendingMovies } from '../services/api'

export default function SearchMovie() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const trending = await getTrendingMovies()
                setMovies(trending)
            } catch (err) {
                console.error(err)
                setError('Failed to load movies')
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [])

    return (
        <div>
            <div className="movie-container">
                <div className="search-container">
                    <input className="input-search" type="text" placeholder="Search for a movie..." />
                    <button className="search-button">Search</button>
                </div>
                <div className="trending-movies">
                    <h2>Trending movies</h2>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {!loading && !error && (
                        <div className='movie-card-container'>
                            {movies.map(movie => (
                                <div className="movie-card">
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
                                    <p className='movie-title' key={movie.id}>{movie.title}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}