import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import '../styles/Footer.css'

const Footer = () => {

    
    return (
        <nav className="footer">
            <ul className="footer-links">
                <li>
                    <Link to="/portfolio/home" className="footer-link">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" className="footer-link">
                        <FontAwesomeIcon icon={faGithub} size="xl"/>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/blog" className="footer-link">
                        <FontAwesomeIcon icon={faFile} size="xl" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Footer