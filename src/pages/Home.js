import React from 'react';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.css';
import profilePic from '../assets/images/1717020989343.jpg'; // Ensure the image path is correct

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="header-content">
          <div className="text-content">
            <h1 className="welcome">WELCOME TO MY WORLD</h1>
            <h2>Hi, I'm <span className="name">Nichole Fernin</span></h2>
            <p className="profession">a Graduating student.</p>
            <p className="description">
            Hello! I'm Nichole Fernin, a soon-to-be graduate from Central Philippines State University with a Bachelor of Science in Information Technology. Throughout my academic career, I've been passionate about programming and web development, driven by a desire to innovate and create meaningful digital experiences. I look forward to applying my skills and knowledge in the tech industry, contributing to advancements that shape our digital world.
            </p>
            <div className="social-links">
              <a href="https://web.facebook.com/Clairenichole27" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> {/* Facebook icon */}
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
          <div className="image-content">
            <img src={profilePic} alt="Nichole Fernin" className="profile-pic" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;

