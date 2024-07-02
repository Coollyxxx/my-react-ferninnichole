import React from 'react';
import './Experience.css'; // Make sure to import your CSS file

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="timeline-content">
              <h3>NOTF – Work Immersion</h3>
              <span>Negros Occidental Teachers Federation | January 2020</span>
              <p>In my work experience, I have gained valuable insights and practical skills by observing and learning the daily operations and workflow of the organization. I actively assisted in various tasks and projects under supervision, ensuring their successful completion according to provided instructions. Engaging in team meetings, training sessions, and organizational activities allowed me to contribute effectively to collaborative efforts and expand my knowledge base. Documenting processes, maintaining records, and reporting on completed tasks were integral parts of my role, ensuring transparency and efficiency. Seeking regular feedback from supervisors was crucial in refining my performance and developing new skills. Adhering to organizational policies, rules, and regulations demonstrated my commitment to maintaining high standards and professionalism throughout my work experience.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="timeline-content">
              <h3>CPSU- Supply Office - On the Job Training (Intern)</h3>
              <span>Central Philippines State University | October 2023 - January 2024</span>
              <p>As an intern student, I gained valuable experience by actively participating in various aspects of daily operations and workflows within the organization. My responsibilities included assisting in essential tasks and projects under the supervision of mentors, ensuring timely and accurate completion. I diligently followed instructions provided by supervisors, contributing to team efforts and learning from hands-on experience. Engaging in team meetings, training sessions, and organizational activities enriched my understanding of professional dynamics and enhanced my skill development. I maintained detailed documentation of processes and tasks, supporting efficient workflow management and facilitating comprehensive reporting. Seeking regular feedback from mentors was pivotal in refining my abilities and adapting to evolving responsibilities. Adherence to organizational policies and regulations was a priority, demonstrating my commitment to ethical standards and contributing to a positive work environment.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-briefcase"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
