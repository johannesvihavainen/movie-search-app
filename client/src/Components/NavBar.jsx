import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='nav-bar-container'>
            <h1 className='nav-bar-title'>Movie Search App</h1>
            <ul className='nav-bar-ul'>
                <li className='nav-bar-list-item'><Link className='nav-bar-link' to="/">Home</Link></li>
                <li className='nav-bar-list-item'><Link className='nav-bar-link' to="/favorites">Favorites</Link></li>
            </ul>
        </div>
    )
}