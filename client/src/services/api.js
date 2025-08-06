// services/api.js

const BASE_URL = 'https://api.themoviedb.org/3'
const headers = {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjBmZjg4ZDA5ZDI5MzU2ZTAxOWI4ZWE1NTQ2NjgzMSIsIm5iZiI6MTc1NDUwMjU2Ny42NDksInN1YiI6IjY4OTM5NWE3OWU2MDhmZDlmN2FiOWE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tuv1rnnbbUIJii9gojFlhY-K-nF4Igv_JjxIY5sahIQ',
}

// Get trending movies
export const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day?language=en-US`, {
    method: 'GET',
    headers,
  })
  const data = await response.json()
  return data.results
}
