export default function SearchMovie() {
    return (
        <div>
            <div className="movie-container">
                <div className="search-container">
                    <input className="input-search" type="text" placeholder="Search for a movie..." />
                    <button className="search-button">Search</button>
                </div>
            </div>
        </div>
    )
}