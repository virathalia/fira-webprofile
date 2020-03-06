import React, { Component } from 'react'
import '../style/Home.css';
import { Animated } from "react-animated-css";

export default class Home extends Component {
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div className="main-container">
                    <div className="home-wrap">
                        <h3>Hello, I'am</h3>
                        <h1>Fira Thalia Fadia</h1>
                        <h4>Mojang Kota Banjar</h4>
                        <hr className="light" />
                        <p>"Im from Banjar, Indonesia."</p>
                        <br />
                        <span id="phone">085322450575</span>
                        <span id="email">virathalia69@gmail.com</span>
                        <br/>
                    </div>
                </div>
             </Animated>
        )
    }
}
