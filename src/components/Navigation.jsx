import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    // function getNavHeight() {
    //     var nav = document.querySelector('.navbar');
    //     var navHeight = nav.offsetHeight;
    //     console.log(navHeight + "px");
    // }

    // getNavHeight();

    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container nav-container d-flex flex-row justify-content-between d-flex align-items-center">

                    <div className="logo">
                        <li className="list-item">
                            <h1 className="logo-name navbar-brand">Riley Litchfield
                            </h1>
                        </li></div>
                    <div>
                        <ul className="navbar-nav ml-auto">

                            <li
                                className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${props.location.pathname === "/work" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/work">
                                    Work
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);