import React from "react";
import graphic from '../img/graphic.png';
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="text-light p-sm-5 p-5 mt-lg-5 text-center text-lg-start">
            <div className="container">
                <div className="d-lg-flex align-items-center justify-content-between">
                    <div>
                        <h1 className="display-1 fw-bold">Hi,<br />I'm Riley</h1>
                        <p className="lead my-4 fw-bold">A web developer.</p>
                        <button className="btn btn-blue">View My Work</button>
                    </div>
                    <img className="img-fluid w-100 my-5 my-lg-0 mx-auto mx-lg-0 px-2" id="home-graphic" src={graphic} alt="Man using computer." />
                </div>
            </div>
        </section>
    );
}

export default Home;