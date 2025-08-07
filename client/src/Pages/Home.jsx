import '../css/Home.css'
import MovieCard from "../Components/MovieCard"
import React, { useEffect, useState } from 'react'
import { getTrendingMovies, searchMovies } from '../services/api'

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
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
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
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
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-btn">Search</button>
        </form>

        {error && <div className='error-message'>{error}</div>}

        {loading ? <div className='loading'>Loading...</div> : <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>}

    </div>
}

export default Home