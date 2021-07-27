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
            <nav id="testid" className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container d-flex flex-row justify-content-between d-flex align-items-center">

                    <div className="logo">
                        <li>
                            <h1 className="logo-name">Riley Litchfield
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