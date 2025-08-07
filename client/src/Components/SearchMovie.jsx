import React, { useEffect, useState } from 'react'
import { getTrendingMovies, searchMovies } from '../services/api'

export default function SearchMovie() {
    const [userInput, setUserInput] = useState("")
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

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!userInput.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(userInput)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError('failed to search movies...')
        }
        finally {
            setLoading(false)
        }

    }

    return (
        <div>
            <div className="movie-container">
                <form className='search-form' onSubmit={handleSearch}>
                    <div className="search-container">
                        <input className="input-search" type="text" placeholder="Search for a movie..." value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                        <button type='submit' className="search-button">Search</button>
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
                </form>
            </div>
        </div>
    )
}