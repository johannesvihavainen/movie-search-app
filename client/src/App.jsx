import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from "./Components/NavBar"
import SearchMovie from './Components/SearchMovie'
import Favorites from './Pages/Favorites'
import MovieCard from './Components/MovieCard'
import Home from './Pages/Home'
import { MovieProvider } from './Contexts/MovieContext'

function App() {

  return (
    <main className='main-content'>
      <MovieProvider>
        <NavBar />
        {/* <SearchMovie /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          {/* <Route path='/' element={<SearchMovie />} />
        <Route path='/favorites' element={<Favorites />} /> */}
        </Routes>
      </MovieProvider>
    </main>

  )
}

export default App
