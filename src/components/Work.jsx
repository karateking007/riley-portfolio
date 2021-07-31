import React from "react";
import markdownPreview from '../img/markdown.png';
import quote from '../img/quote.png';
import weather from '../img/weather.png';
import crypto from '../img/crypto.png';

function Work() {
    return (
        <section className="p-0 p-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg d-flex align-items-center justify-content-center">
                        <div className="d-none d-lg-flex hvrbox hvr-bounce-to-bottom">
                            <img src={markdownPreview} className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top">
                                <div className="hvrbox-text"><h5 class="fw-bold">Markdown Previewer</h5><p>React, Bootstrap, & SCSS</p></div>
                            </div>
                        </div>
                        <div className="card bg-light d-lg-none d-lg-none border-0 my-3">
                            <div className="card-body text-center text-dark">
                                <img class="card-img-top" src={markdownPreview} alt="React Markdown Previewer" />
                                <h3 className="card-title my-3 d-lg-none fw-bold">Markdown Previewer</h3>
                                <p className="card-text mt-3 mt-lg-0 d-lg-none">React, Bootstrap, & SCSS.</p>
                                <div class="d-grid d-lg-none gap-2">
                                    <a href="#" className="btn btn-blue">View Live</a>
                                    <a href="#" className="btn btn-blue">View GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg d-flex align-items-center justify-content-center">
                        <div className="d-none d-lg-flex hvrbox hvr-bounce-to-bottom">
                            <img src={quote} className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top">
                                <div className="hvrbox-text"><h5 class="fw-bold">Random Quote Generator</h5><p>ZenQuotes API, AJAX, Bootstrap, jQuery, and SCSS</p></div>
                            </div>
                        </div>
                        <div className="card bg-light d-lg-none border-0 my-3">
                            <div className="card-body text-center text-dark">
                                <img class="card-img-top" src={quote} alt="Random Quote Generator" />
                                <h3 className="card-title my-3 d-lg-none fw-bold">Random Quote Generator</h3>
                                <p className="card-text mt-3 mt-lg-0 d-lg-none">ZenQuotes API, AJAX, Bootstrap, jQuery, and SCSS</p>
                                <div class="d-grid d-lg-none gap-2">
                                    <a href="#" className="btn btn-blue">View Live</a>
                                    <a href="#" className="btn btn-blue">View GitHub</a>
                                </div>
                            </div>
                        </div></div>
                </div>
                <div className="row">
                    <div className="col-lg d-flex align-items-center justify-content-center">
                        <div className="d-none d-lg-flex hvrbox hvr-bounce-to-bottom">
                            <img src={weather} className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top">
                                <div className="hvrbox-text"><h5 class="fw-bold">Weather App</h5><p>Vanilla JS & OpenWeatherMap API</p></div>
                            </div>
                        </div>
                        <div className="card bg-light d-lg-none border-0 my-3">
                            <div className="card-body text-center text-dark">
                                <img class="card-img-top" src={weather} alt="Weather App" />
                                <h3 className="card-title my-3 d-lg-none fw-bold">Weather App</h3>
                                <p className="card-text mt-3 mt-lg-0 d-lg-none">Vanilla JS & OpenWeatherMap API</p>
                                <div class="d-grid d-lg-none gap-2">
                                    <a href="#" className="btn btn-blue">View Live</a>
                                    <a href="#" className="btn btn-blue">View GitHub</a>
                                </div>
                            </div>
                        </div></div>
                    <div className="col-lg d-flex align-items-center justify-content-center">
                        <div className="d-none d-lg-flex hvrbox hvr-bounce-to-bottom">
                            <img src={crypto} className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top">
                                <div className="hvrbox-text"><h5 class="fw-bold">Crypto Vs. Stocks Graph</h5><p>Twelvedata API, Vanilla JS & Charts.js</p></div>
                            </div>
                        </div>
                        <div className="card bg-light d-lg-none border-0 my-3">
                            <div className="card-body text-center text-dark">
                                <img class="card-img-top" src={crypto} alt="Crypto Vs. Stocks Graph" />
                                <h3 className="card-title my-3 d-lg-none fw-bold">Crypto Vs. Stocks Graph</h3>
                                <p className="card-text mt-3 mt-lg-0 d-lg-none">Twelvedata API, Vanilla JS & Charts.js</p>
                                <div class="d-grid d-lg-none gap-2">
                                    <a href="#" className="btn btn-blue">View Live</a>
                                    <a href="#" className="btn btn-blue">View GitHub</a>
                                </div>
                            </div>
                        </div></div>
                </div>
            </div>
        </section>
    );
}

export default Work;