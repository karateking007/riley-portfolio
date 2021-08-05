import React from "react";
import markdownPreview from '../img/markdown.png';
import quote from '../img/quote.png';
import weather from '../img/weather.png';
import crypto from '../img/crypto.png';

const markdownLink = "https://codepen.io/karateking/full/vYmYpqq";
const quoteLink = "https://boring-euler-78b0c6.netlify.app/";
const weatherLink = "https://karateking007.github.io/weatherApp/";
const cryptoLink = "https://stocktocrypto.com/";


function Work() {
    return (
        <section className="p-0 p-md-5 py-5">
            <div className="container">
                <h2 className="text-center text-light text-uppercase">My work</h2>
                <div className="line mb-4"></div>
                <div className="row mx-auto" id="work-row">
                    {/* For larger screens */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-md-center mb-0 mb-lg-4">
                        <div className="d-none d-lg-flex hvrbox hvr-bounce-to-bottom">
                            <img src={markdownPreview} className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top">
                                <div className="hvrbox-text"><h5 class="fw-bold">Markdown Previewer</h5><p>React, Bootstrap, & SCSS</p>
                                    <a href={markdownLink} className="btn btn-white" target="_blank">View Live</a>
                                </div>
                            </div>
                        </div>
                        {/* For tablet and mobile */}
                        <div className="card bg-light d-lg-none border-0 my-3">
                            <div className="card-body text-center text-dark">
                                <img class="card-img-top" src={markdownPreview} alt="React Markdown Previewer" />
                                <h3 className="card-title my-3 d-lg-none fw-bold">Markdown Previewer</h3>
                                <p className="lead card-text mt-3 mt-lg-0 d-lg-none">React, Bootstrap, & SCSS.</p>
                                <a href={markdownLink} className="btn btn-black d-lg-none" target="_blank">View Live</a>
                            </div>
                        </div>
                    </div>
                    {/* For larger screens */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-lg-start justify-content-md-center mb-0 mb-lg-4">
                        <div className="d-none d-lg-flex hvrbox hvr-bounce-to-bottom">
                            <img src={quote} className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top">
                                <div className="hvrbox-text"><h5 class="fw-bold">Random Quote Generator</h5><p>ZenQuotes API, AJAX, Bootstrap, jQuery, and SCSS</p>
                                    <a href={quoteLink} className="btn btn-white" target="_blank">View Live</a></div>
                            </div>
                        </div>
                        {/* For tablet and mobile */}
                        <div className="card bg-light d-lg-none border-0 my-3">
                            <div className="card-body text-center text-dark">
                                <img class="card-img-top" src={quote} alt="Random Quote Generator" />
                                <h3 className="card-title my-3 d-lg-none fw-bold">Random Quote Generator</h3>
                                <p className="card-text mt-3 mt-lg-0 d-lg-none">ZenQuotes API, AJAX, Bootstrap, jQuery, and SCSS</p>
                                <a href={quoteLink} className="btn btn-black d-lg-none" target="_blank">View Live</a>
                            </div>
                        </div></div>
                    {/* </div>
                <div className="row  mx-auto my-3"> */}
                    {/* For larger screens */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-md-center">
                        <div className="d-none d-lg-flex hvrbox hvr-bounce-to-bottom">
                            <img src={weather} className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top">
                                <div className="hvrbox-text"><h5 class="fw-bold">Weather App</h5><p>Vanilla JS & OpenWeatherMap API</p><a href={weatherLink} className="btn btn-white" target="_blank">View Live</a></div>
                            </div>
                        </div>
                        {/* For tablet and mobile */}
                        <div className="card bg-light d-lg-none border-0 my-3">
                            <div className="card-body text-center text-dark">
                                <img class="card-img-top" src={weather} alt="Weather App" />
                                <h3 className="card-title my-3 d-lg-none fw-bold">Weather App</h3>
                                <p className="card-text mt-3 mt-lg-0 d-lg-none">Vanilla JS & OpenWeatherMap API</p>
                                <a href={weatherLink} className="btn btn-black d-lg-none" target="_blank">View Live</a>
                            </div>
                        </div></div>
                    {/* For larger screens */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-lg-start justify-content-md-center">
                        <div className="d-none d-lg-flex hvrbox hvr-bounce-to-bottom">
                            <img src={crypto} className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top">
                                <div className="hvrbox-text"><h5 class="fw-bold">Crypto Vs. Stocks Graph</h5><p>Twelvedata API, Vanilla JS & Charts.js</p><a href={cryptoLink} className="btn btn-white" target="_blank">View Live</a></div>
                            </div>
                        </div>
                        {/* For tablet and mobile */}
                        <div className="card bg-light d-lg-none border-0 my-3">
                            <div className="card-body text-center text-dark">
                                <img class="card-img-top" src={crypto} alt="Crypto Vs. Stocks Graph" />
                                <h3 className="card-title my-3 d-lg-none fw-bold">Crypto Vs. Stocks Graph</h3>
                                <p className="card-text mt-3 mt-lg-0 d-lg-none">Twelvedata API, Vanilla JS & Charts.js</p>
                                <a href={cryptoLink} className="btn btn-black d-lg-none" target="_blank">View Live</a>
                            </div>
                        </div></div>
                </div>
            </div>
        </section>
    );
}

export default Work;