import React from "react";
import markdownPreview from '../img/markdown.png';
import quote from '../img/quote.png';
import weather from '../img/weather2.png';
import crypto from '../img/crypto.png';

const projects = [
    {
        title: "Weather App",
        description: "React.js, Bootstrap and API Integration",
        img: weather,
        liveLink: "https://poetic-manatee-1b1762.netlify.app/",
    },
    {
        title: "Random Quote Generator",
        description: "React.js, Redux, API Integration, AJAX, Bootstrap, jQuery, and SCSS",
        img: quote,
        liveLink: "https://boring-euler-78b0c6.netlify.app/",
    },
    {
        title: "Markdown Previewer",
        description: "React.js, Bootstrap, & SCSS",
        img: markdownPreview,
        liveLink: "https://codepen.io/karateking/full/vYmYpqq",
    },
    {
        title: "Crypto Vs. Stocks Graph",
        description: "API Integration, Vanilla JS & Charts.js",
        img: crypto,
        liveLink: "https://stocktocrypto.com/",
    },
];

function Work() {
    return (
        <section className="p-0 p-md-5 py-5">
            <div className="container">
                <h2 className="text-center text-light text-uppercase">My work</h2>
                <div className="line mb-4"></div>
                <div className="row mx-auto" id="work-row">
                    {projects.map((project, index) => (
                        <div className="col-lg-6 d-flex align-items-center mb-4" key={index}>
                            <div className="card bg-light border-0">
                                <div className="card-body text-center text-dark">
                                    <img className="card-img-top" src={project.img} alt={project.title} />
                                    <h3 className="card-title my-3 fw-bold">{project.title}</h3>
                                    <p className="card-text">{project.description}</p>
                                    <a
                                        href={project.liveLink}
                                        className="btn btn-black"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Live
                                    </a>
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
