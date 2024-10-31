import React from 'react';
import './Profile.css'; // CSS file for styling

const Profile = () => {
  return (
    <div className="profile">
      <header className="profile-header">
        <img 
          src="your-image-url.jpg" 
          alt="Your Name" 
          className="profile-image"
        />
        <h1>Your Name</h1>
        <p className="profile-title">Frontend Developer | React Enthusiast</p>
      </header>
      
      <section className="profile-summary">
        <h2>About Me</h2>
        <p>
          Brief introduction about yourself. Talk about your experience, interests, 
          and what drives you in your field. Keep it short and engaging.
        </p>
      </section>

      <section className="profile-skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>UI/UX Design</li>
          {/* Add more as needed */}
        </ul>
      </section>

      <section className="profile-projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Project 1:</strong> Brief description of the project.</li>
          <li><strong>Project 2:</strong> Brief description of the project.</li>
          <li><strong>Project 3:</strong> Brief description of the project.</li>
          {/* Add more as needed */}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
