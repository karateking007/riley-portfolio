import React from "react";
import graphic from '../img/graphic.png';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home d-flex align-items-center">
            <div id="home-container" className="container">
                <div className="row align-items-center h-100">
                    <div className="hero-text col-lg-5">
                        <h1 className="headline font-weight-bold">Hi, <br />I'm Riley!</h1>
                        <p className="headline-sub-text mt-4">A web developer.</p>
                        <Link to="/work"><button id="home-button" className="btn btn-blue mt-4">
                            See My Work
                        </button></Link>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-end align-items-center h-100">
                        <img
                            className="graphic img-fluid rounded"
                            src={graphic}
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;