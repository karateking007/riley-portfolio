import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1">
            <div className="container">
                <Link to="/" className="navbar-brand fs-2">Riley Litchfield</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse text-center" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navmenu">
                            <Link to="/work" className="nav-link ">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navigation);