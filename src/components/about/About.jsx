import React from 'react'
import './about.css' // make sure to import css file for 'about' section
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Recent QA Specialist & Engineering Ambassador</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Interests</h5>
              <small>•Software development •Medical technology •Cybersecurity</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Web, Technical, and Design Focused Projects (React, Java, Figma)</small>
            </article>
          </div>

          <p>
            Hey there! I'm a passionate engineering student with a strong work ethic and a deep love for technology. 
            I thrive on challenges and constantly seek opportunities to expand my knowledge. 
            With a keen interest in exploring diverse sectors of the tech industry, I'm dedicated to making a positive 
            impact through continuous learning and growth.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About