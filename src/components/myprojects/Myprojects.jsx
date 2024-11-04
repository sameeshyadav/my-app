import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/project01.jpg'
import IMG2 from '../../assets/logo_trans.png'
import IMG3 from '../../assets/project03.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Green-Basket</h3>
            <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/GreenBasketCdac2021/GreenBasket" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>EyeProctor</h3>
            <small className='text-light'>MERN stack</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/EyeProctor/BTech-G17" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/sameeshyadav/my-app" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://sameesh.netlify.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects