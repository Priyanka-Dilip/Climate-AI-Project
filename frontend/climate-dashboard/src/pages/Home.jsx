import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home">

      <div className="home-overlay">

        {/* NAVBAR */}

        <nav className="navbar">

          <h1 className="logo">
            Climate AI
          </h1>

          <div className="nav-links">

            <a href="/">Home</a>

            <a href="/about"> About</a>

            <button
              className="start-btn"
              onClick={() => navigate("/weather-risk")}
>
              Get Started
            </button>

          </div>

        </nav>


        {/* HERO SECTION */}

        <div className="hero-section">

          <h1>
            Climate Intelligence Platform
          </h1>

          <p>
            Climate Pattern Analysis &
            Extreme Weather Risk Prediction
          </p>

          <button
            className="explore-btn"
            onClick={() => navigate("/dashboard")}
          >
            Explore Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default Home;