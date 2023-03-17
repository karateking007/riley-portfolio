import React from 'react';
import markdownPreview from '../img/markdown.png';
import quote from '../img/quote.png';
import weather from '../img/weather2.png';
import crypto from '../img/crypto.png';

const projects = [
    {
        title: 'Weather App',
        image: weather,
        description: 'React.js, Bootstrap and API Integration',
        liveLink: 'https://poetic-manatee-1b1762.netlify.app/',
    },
    {
        title: 'Random Quote Generator',
        image: quote,
        description: 'React.js, Redux, API Integration, AJAX, Bootstrap, jQuery, and SCSS',
        liveLink: 'https://boring-euler-78b0c6.netlify.app/',
    },
    {
        title: 'Markdown Previewer',
        image: markdownPreview,
        description: 'React.js, Bootstrap, & SCSS',
        liveLink: 'https://codepen.io/karateking/full/vYmYpqq',
    },
    {
        title: 'Crypto Vs. Stocks Graph',
        image: crypto,
        description: 'API Integration, Vanilla JS & Charts.js',
        liveLink: 'https://stocktocrypto.com/',
    },
];

function Work() {
    return (
        <section className="p-1 p-md-5 py-5">
            <div className="container">
                <h2 className="text-center text-light text-uppercase">My work</h2>
                <div className="line mb-4"></div>
                <div className="row mx-auto" id="work-row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center mb-4">
                            <div className="hvrbox hvr-bounce-to-bottom">
                                <img src={project.image} className="hvrbox-layer_bottom" alt={project.title} />
                                <div className="hvrbox-layer_top">
                                    <div className="hvrbox-text">
                                        <h5 className="fw-bold">{project.title}</h5>
                                        <p>{project.description}</p>
                                        <a href={project.liveLink} className="btn btn-white" target="_blank" rel="noopener noreferrer">
                                            View Live
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;
