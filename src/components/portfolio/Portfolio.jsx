import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
// import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Micro Podcast',
        info: 'A platform to listen to all kinds of podcast.',
        github: 'https://github.com/ARMSTRONG-AISOSA/Podcast-Webpage/tree/master',
        demo: 'https://armstrong-aisosa.github.io/Podcast-Webpage/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'HooBank',
        info: 'A payment platform with diverse online transactions mean.',
        github: 'https://github.com/ARMSTRONG-AISOSA/hoobank_project_build',
        demo: 'https://armstrong-aisosa.github.io/hoobank_project_build/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'GameRex',
        info: 'A website for gamers to buy their favourite games, gadget and merch\'s.',
        github: 'https://github.com/ARMSTRONG-AISOSA/Gaming-Website/tree/master',
        demo: 'https://armstrong-aisosa.github.io/Gaming-Website/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'BenCreate Consult',
        info: 'A consulting website for a business.',
        github: 'https://github.com/ARMSTRONG-AISOSA/BenCreate/',
        demo: 'https://armstrong-aisosa.github.io/BenCreate/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Gerichte',
        info: 'This is a React based Resturant Website',
        github: 'https://github.com/ARMSTRONG-AISOSA/react-resturant-project/',
        demo: 'https://armstrong-aisosa.github.io/react-resturant-project/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Gemini Clon',
        info: 'This ia an AGI clone built with react and consumes Gemini Api',
        github: 'https://github.com/ARMSTRONG-AISOSA/gemini-clone',
        demo: 'https://armstrong-aisosa.github.io/gemini-clone/'
    },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: 'This is a portfolio item title',
    //     info: 'This is a portfolio item title.',
    //     github: '#',
    //     demo: '#'
    // }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, info, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image"><img src={image} alt={title} /></div>
                                <h3>{title}</h3>
                                <h5>{info}</h5>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
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
