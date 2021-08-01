import React from "react";
import { withRouter } from "react-router-dom";

function Navigation(props) {

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1">
            <div className="container">
                <a href="#" className="navbar-brand fs-2">Riley Litchfield</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse text-center" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/work" className="nav-link">My Work</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navigation);