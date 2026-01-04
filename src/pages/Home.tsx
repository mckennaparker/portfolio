import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page. Explore my projects and skills!</p>
            <Link to="/portfolio" className="btn">
                Go to Portfolio
            </Link>
        </div>
    );
}

export default Home;