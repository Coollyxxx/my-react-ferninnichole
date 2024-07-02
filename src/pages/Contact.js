import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="form-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon={faPaperPlane} className="icon" />
          <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} /> Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
