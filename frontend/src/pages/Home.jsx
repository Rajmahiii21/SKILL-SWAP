import React from "react";
import { Link } from "react-router-dom";
// At the top of Home.jsx
import { FaRegHandshake } from "react-icons/fa"; // For handshake
import { FiUsers, FiAward } from "react-icons/fi"; // For other icons
import diverseCommunityImg from "../assets/undraw_online-community_3o0l.png";
import personalizedLearningImg from "../assets/undraw_graduation_u7uc.png";
import flexibleSchedulingImg from "../assets/undraw_events-calendar_sudy.png";


import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Unlock Your Potential with SkillSwap</h1>
          <p>
            Connect with a community of learners and experts to exchange skills
            and knowledge. Offer what you know, and learn what you want to know.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn primary">Get Started</Link>
            
            <button className="btn secondary">Explore Skills</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1661963004921-c3f559cdd1a6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="SkillSwap Hero"
          />
        </div>
      </section>

      {/* How it Works */}
   <section className="works">
  <h2>How SkillSwap Works</h2>
  <div className="works-cards">
    <div className="card">
      <div className="works-icon-bg">
        <FiUsers />
      </div>
      <h3 className="works-title">Create Your Profile</h3>
      <p>Showcase your skills and interests to attract partners.</p>
    </div>
    <div className="card">
      <div className="works-icon-bg">
        <FaRegHandshake />
      </div>
      <h3 className="works-title">Find Your Match</h3>
      <p>Browse profiles or use our matching algorithm.</p>
    </div>
    <div className="card">
      <div className="works-icon-bg">
        <FiAward />
      </div>
      <h3 className="works-title">Exchange Skills</h3>
      <p>Schedule sessions and learn while tracking your progress.</p>
    </div>
  </div>
</section>


      {/* Why Choose Section */}
    
<section className="choose">
  <h2>Why Choose SkillSwap?</h2>
  <div className="choose-cards">
    <div className="choose-card">
      <img src={diverseCommunityImg} alt="Diverse Community" className="choose-card-img" />
      <div className="choose-card-body">
        <h3>Diverse Community</h3>
        <p>
          Connect with people from all walks of life, offering a wide range of skills and perspectives.
        </p>
      </div>
    </div>
    <div className="choose-card">
      <img src={personalizedLearningImg} alt="Personalized Learning" className="choose-card-img" />
      <div className="choose-card-body">
        <h3>Personalized Learning</h3>
        <p>
          Tailor your learning experience to your specific needs and goals, with one-on-one sessions.
        </p>
      </div>
    </div>
    <div className="choose-card">
      <img src={flexibleSchedulingImg} alt="Flexible Scheduling" className="choose-card-img" />
      <div className="choose-card-body">
        <h3>Flexible Scheduling</h3>
        <p>
          Exchange skills at your own pace, with flexible scheduling options to fit your lifestyle.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Start?</h2>
        <p>Join thousands who are sharing knowledge and learning new things.</p>
        <Link to="/register"  className="btn primary">Sign Up Now</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 SkillSwap. All rights reserved.</p>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
