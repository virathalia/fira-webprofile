import React from 'react'
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";


export default function Navbar() {
    return (
        <div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div>
                    <nav clasname="nav-header">
                        <ul>
                            <li className="active">
                                <Link id="tab-text" to="/">
                                    Welcome
                            </Link>
                            <Link id="tab-icon" to="/">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            </Link>
                            </li>
                            <li className="active">
                                <Link id="tab-text" to="/profile">
                                    Profile
                            </Link>
                            <Link id="tab-icon" to="/profile">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Animated>
        </div>
    )
}

