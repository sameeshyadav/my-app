import React from 'react'
import './about.css'
import myImage from '../../assets/img004.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import { GiNotebook } from 'react-icons/gi';

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.Tech (Computer Science) <br /><i>KITCOE Kolhapur.</i></small>
              </article>

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>C-DAC</h5>
                  <small>Diploma in<br/> advance Computing</small>
              </article>

              <article className='about__card'>
                  <GiNotebook className='about__icon'/>
                  <h5>Work Expreince</h5>
                  <small>
                    <ul>
                      <li>3+ years</li>
                      <li>Druva</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Software Engineer</b> at Druva, 
                    Enthusiastic and motivated to find a challenging opportunity that allows me to expand my technical skills.
                    With hands-on experience in various programming languages, 
                    I am a quick learner who eagerly embraces new challenges.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About