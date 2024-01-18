import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dish Diary - An easy recipe tracking app for (broke) college students - coming soon!',
    source: 'Github',
    link: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'InProgress  - UX Laurier Designathon',
    source: 'Figma',
    link: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Fitness Tracker',
    source: 'Github',
    link: 'https://github.com',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, source, link}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={link} className='btn' target='_blank'>{source}</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio