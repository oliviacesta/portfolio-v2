import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Dish Diary</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>InProgress  - UX Laurier Designathon</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.figma.com/proto/P5szHK3g56dPJGj9ckVzQn/Rough-Wireframe?type=design&node-id=11-5&t=BuJb2jGstwOrWziM-1&scaling=scale-down&page-id=10%3A3&starting-point-node-id=11%3A5" target="_blank" className='btn'>Figma</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Fitness Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio