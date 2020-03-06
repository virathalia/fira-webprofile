import React, { Fragment    } from 'react';
import { Animated } from "react-animated-css";
import '../style/Kiri.css';
import me from '../asset/fira.jpg';

export default function kiri() {
    return (
            <Fragment>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="right">
                        <div className="cover-photo">
                            <img className="img-profile" src={me} alt="me "  />
                        </div>
                        <div className="identity">
                            <h3>Fira Thaila Fadia</h3>
                            <p>Mojang Kota Banjar</p>
                        </div>
                        <div className="cover-social">
                            <ul>
                                <li>
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <a href="https://instagram.com/tehfiraa?igshid=9y9glfnnit1k" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Animated>
            </Fragment>
    )
}
