import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <nav className="footer">
            <ul className="footer-links">
                <li>
                    <Link to="/portfolio/home" className="footer-link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" className="footer-link">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/blog" className="footer-link">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Footer