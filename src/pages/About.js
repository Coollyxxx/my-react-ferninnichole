import React from 'react';
import './About.css';
import aboutPic from '../assets/images/1703042281262.jpg'; // Make sure this path is correct

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="image-content">
          <img src={aboutPic} alt="Aboutpic" className="about-pic" />
        </div>
        <div className="text-content">
          <h1>About Me</h1>
          <p>
            My name is Nichole. Abaja is my mother's surname, and Fernin is my father's last name. So, basically, I am Nichole Abaja Fernin. My mother got pregnant 21 years ago, and she gave birth to me on August 3, 2001.
          </p>
          <p>
            Now, I am studying at Central Philippines State University, pursuing a Bachelor of Science in Information Technology. I am a fourth-year college student in section D. I chose this course because I want to be a programmer and web developer someday. That's why I expect my teachers to teach me well.
          </p>
          <h2>Personal Interest</h2>
          <p>Cooking</p>
          <p>Reading</p>
          <h2>Languages</h2>
          <p>Hiligaynon</p>
          <p>Tagalog</p>
          <p>Cebuano</p>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default About;

