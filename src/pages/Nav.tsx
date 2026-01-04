import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => {
    return (
        <nav className="nav">
            <h1 className="nav-title">McKenna Parker</h1>
            <ul className="nav-links">
                <li>
                    <Link to="/portfolio/home" className="nav-link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" className="nav-link">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/blog" className="nav-link">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav