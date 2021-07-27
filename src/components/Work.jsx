import React from "react";
import markdownPreview from '../img/markdown.png';
import quote from '../img/quote.png';
import weather from '../img/weather.png';
import crypto from '../img/crypto.png';

function Work() {
    return (
        <section className="portfolio" id="portfolio">
            <div id="portfolio-container" className="container">

                <h2 className="page-section-heading text-center text-uppercase pt-5 pb-2">My Work</h2>

                <div className="line mb-5"></div>
                <div className="portfolio-grid">

                    <div className="portfolio-row row justify-content-center">

                        <div className="portfolio-col col-sm-12 col-md-6 mb-3">
                            <div className="portfolio-item"><a href="https://codepen.io/karateking/full/vYmYpqq" target="_blank">
                                <div className="hvrbox hvr-bounce-to-bottom">
                                    <img src={markdownPreview} className="hvrbox-layer_bottom" />
                                    <div className="hvrbox-layer_top">
                                        <div className="hvrbox-text"><h3>Markdown Previewer</h3><p>React, Bootstrap, & SCSS</p></div>
                                    </div>
                                </div>
                            </a></div>
                        </div>

                        <div className="portfolio-col col-sm-12 col-md-6 mb-3">
                            <div className="portfolio-item"><a href="https://codepen.io/karateking/full/OJpqbMG" target="_blank">
                                <div className="hvrbox hvr-bounce-to-bottom">
                                    <img src={quote} className="hvrbox-layer_bottom" />
                                    <div className="hvrbox-layer_top">
                                        <div className="hvrbox-text"><h3>Random Quote Generator</h3><p>ZenQuotes API, AJAX, Bootstrap, jQuery, and SCSS </p></div>
                                    </div>
                                </div>
                            </a></div>
                        </div></div>
                    <div className="portfolio-row row justify-content-center">

                        <div className="portfolio-col col-sm-12 col-md-6 mb-3">
                            <div className="portfolio-item"><a href="https://karateking007.github.io/weatherApp/" target="_blank">
                                <div className="hvrbox hvr-bounce-to-bottom">
                                    <img src={weather} className="hvrbox-layer_bottom" />
                                    <div className="hvrbox-layer_top">
                                        <div className="hvrbox-text"><h3>Weather App</h3><p>Vanilla JS & OpenWeatherMap API</p></div>
                                    </div>
                                </div>
                            </a></div>
                        </div>

                        <div className="portfolio-col col-sm-12 col-md-6 mb-3">
                            <div className="portfolio-item"><a href="https://stocktocrypto.com/" target="_blank">
                                <div className="hvrbox hvr-bounce-to-bottom">
                                    <img src={crypto} className="hvrbox-layer_bottom" />
                                    <div className="hvrbox-layer_top">
                                        <div className="hvrbox-text"><h3>Crypto Vs. Stocks Graph</h3><p>Twelvedata API, Vanilla JS & Charts.js</p></div>
                                    </div>
                                </div>
                            </a></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;