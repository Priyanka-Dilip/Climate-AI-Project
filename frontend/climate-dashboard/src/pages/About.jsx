import "../styles/About.css";

import bgImage from "../assets/background.jpg";
import shine from "../assets/dataset/shine/shine.jpg";
import snow from "../assets/dataset/snow/snow.jpg";
import sandstorm from "../assets/dataset/sandstorm/sandstorm.jpg";
import cloudy from "../assets/dataset/cloudy/cloudy.jpg";
import fog from "../assets/dataset/fog/fog.jpg";
import fogsmog from "../assets/dataset/fogsmog/fogsmog.jpg";
import frost from "../assets/dataset/frost/frost.jpg";
import rain from "../assets/dataset/rain/rain.jpg";
import rainbow from "../assets/dataset/rainbow/rainbow.jpg";
import dew from "../assets/dataset/dew/dew.jpg";
import sunrise from "../assets/dataset/sunrise/sunrise.jpg";
import rime from "../assets/dataset/rime/rime.jpg";
import hail from "../assets/dataset/hail/hail.jpg";
import lightning from "../assets/dataset/lightning/lightning.jpg";
import glaze from "../assets/dataset/glaze/glaze.jpg";
import clear from "../assets/dataset/clear/clear.jpg";


function About() {

  return (

    <div
      className="about-container"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >

      {/* SIDEBAR */}

      <div className="sidebar">

        <h1 className="logo">
          Climate AI
        </h1>

        <div className="menu">

          <a href="/">Home</a>
          <a href="#methodology">Methodology</a>

          <a href="#dataset">Dataset</a>

          <a href="#contact">Contact</a>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="main-content">

        {/* HOME */}

        <section id="home" className="section home-section">

          <h1 className="main-title">
            Climate Intelligence Platform
          </h1>

          <div className="typing-text">

            <span>Real-Time Weather Prediction</span>

            <span>Flood & Storm Risk Analysis</span>

            <span>AI Based Climate Monitoring</span>

            <span>Environmental Risk Detection</span>

          </div>

        </section>

        {/* METHODOLOGY */}

        <section id="methodology" className="section white-section">

          <h1 className="section-heading">
            Methodology
          </h1>

          <p className="description">

            Climate Pattern Analysis and Weather Risk Prediction
            uses Artificial Intelligence and Deep Learning
            techniques to classify weather conditions and
            predict environmental risks using CNN based
            image classification and real-time weather APIs.

          </p>
<div className="methodology-box">

    <div className="method-image">
        <img src={rain} alt="methodology" />
    </div>

    <div className="method-content">

        <h2>Steps Involved</h2>

        <div className="steps-grid">
            <p><b>Dataset:</b> 1.4 GB Weather Dataset</p>
            <p><b>Classes:</b> 16 Climate Classes</p>

            <p><b>Prediction:</b> Real-Time Weather</p>
            <p><b>Model:</b> CNN Deep Learning</p>

            <p><b>Frontend:</b> React JS</p>
            <p><b>Backend:</b> Flask</p>

            <p><b>API:</b> Weather API</p>
            <p><b>Accuracy:</b> 95%</p>
        </div>

    </div>

</div>
<div className="stats-container">

  <div className="stat-box">
    <h1>95%</h1>
    <p>Accuracy</p>
  </div>

  <div className="stat-box">
    <h1>1.4 GB</h1>
    <p>Dataset Size</p>
  </div>

  <div className="stat-box">
    <h1>100</h1>
    <p>Epochs</p>
  </div>

  <div className="stat-box">
    <h1>0.06</h1>
    <p>Training Loss</p>
  </div>

</div>
    
          {/* TECHNOLOGIES */}

          <div className="tech-section">

  <h2>Technologies Used</h2>

  <div className="skills-grid">

    {/* LEFT SIDE */}

    <div className="skill">

      <div className="skill-info">
        <span>Python</span>
        <span>95%</span>
      </div>

      <div className="progress">
        <div style={{width:"95%"}}></div>
      </div>

    </div>

    <div className="skill">

      <div className="skill-info">
        <span>TensorFlow</span>
        <span>92%</span>
      </div>

      <div className="progress">
        <div style={{width:"92%"}}></div>
      </div>

    </div>

    <div className="skill">

      <div className="skill-info">
        <span>React JS</span>
        <span>90%</span>
      </div>

      <div className="progress">
        <div style={{width:"90%"}}></div>
      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="skill">

      <div className="skill-info">
        <span>Weather API</span>
        <span>88%</span>
      </div>

      <div className="progress">
        <div style={{width:"88%"}}></div>
      </div>

    </div>

    <div className="skill">

      <div className="skill-info">
        <span>Flask</span>
        <span>85%</span>
      </div>

      <div className="progress">
        <div style={{width:"85%"}}></div>
      </div>

    </div>

    <div className="skill">

      <div className="skill-info">
        <span>HTML/CSS</span>
        <span>93%</span>
      </div>

      <div className="progress">
        <div style={{width:"93%"}}></div>
      </div>

    </div>

  </div>

</div>

        </section>

        {/* DATASET */}

        <section id="dataset" className="section white-section">

          <h1 className="section-heading">
            Dataset
          </h1>

          <p className="dataset-text">
            Sample weather images used for AI model training.
          </p>

          <div className="dataset-grid">

            <div className="dataset-card"><img src={shine} alt="" /><h3>Shine</h3></div>
            <div className="dataset-card"><img src={snow} alt="" /><h3>Snow</h3></div>
            <div className="dataset-card"><img src={sandstorm} alt="" /><h3>Sandstorm</h3></div>
            <div className="dataset-card"><img src={cloudy} alt="" /><h3>Cloudy</h3></div>
            <div className="dataset-card"><img src={fog} alt="" /><h3>Fog</h3></div>
            <div className="dataset-card"><img src={fogsmog} alt="" /><h3>Fogsmog</h3></div>
            <div className="dataset-card"><img src={frost} alt="" /><h3>Frost</h3></div>
            <div className="dataset-card"><img src={rain} alt="" /><h3>Rain</h3></div>
            <div className="dataset-card"><img src={rainbow} alt="" /><h3>Rainbow</h3></div>
            <div className="dataset-card"><img src={dew} alt="" /><h3>Dew</h3></div>
            <div className="dataset-card"><img src={sunrise} alt="" /><h3>Sunrise</h3></div>
            <div className="dataset-card"><img src={rime} alt="" /><h3>Rime</h3></div>
            <div className="dataset-card"><img src={hail} alt="" /><h3>Hail</h3></div>
            <div className="dataset-card"><img src={lightning} alt="" /><h3>Lightning</h3></div>
            <div className="dataset-card"><img src={glaze} alt="" /><h3>Glaze</h3></div>
            <div className="dataset-card"><img src={clear} alt="" /><h3>Clear</h3></div>

          </div>

        </section>

        {/* CONTACT */}

        <section id="contact" className="section white-section">

          <h1 className="section-heading">
            Contact
          </h1>

          <div className="contact-box">

            <div className="contact-info">

              <p>📍 Bangalore, India</p>

              <p>📧 climateai@gmail.com</p>

              <p>📞 +91 XXXXX XXXXX</p>

            </div>

            <div className="contact-form">

              <input type="text" placeholder="Your Name" />

              <input type="email" placeholder="Your Email" />

              <textarea placeholder="Your Message"></textarea>

              <button>
                Send Message
              </button>

            </div>

          </div>

        </section>

      </div>

    </div>

  );
}

export default About;