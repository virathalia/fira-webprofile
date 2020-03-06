import React, { Component } from 'react'
import "../style/Profile.css"
import { Animated } from "react-animated-css";

export default class Profile extends Component {
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div className="main-container">
                    <div className="my-data">
                        <h3 className="title">
                            ABOUT <span>ME</span>
                        </h3>
                        <hr className="bold" />
                        <div className="biodata">
                            <div>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                Name
                        </div>
                            <div>Fira Thalia Fadia</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                Date of birth
                        </div>
                            <div>28 oktober 1999</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                Phone
                        </div>
                            <div>085322450575</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                Email
                        </div>
                            <div>virathalia69@gmail.com</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-globe" aria-hidden="true"></i>
                                Web
                        </div>
                            <div>-</div>
                        </div>
                        <div className="biodata">
                            <div>
                                <i class="fa fa-location-arrow" aria-hidden="true"></i>
                                Address
                        </div>
                            <div>Banjar, Jawa barat, Indonesia</div>
                        </div>
                    </div>
                    <p className="line-wrap">
                        <h3 className="title">
                            MY <span>EDUCATION</span>
                        </h3>
                        <hr className="bold" />
                        <div className="table-wrap first-head">
                            <div className="time-table"></div>
                            <div className="content-table">
                                <i class="fa fa-graduation-cap ico-resume" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <div className="time-table">
                                <div>
                                    <h5>2018 - now</h5>
                                </div>
                            </div>
                            <div className="content-table">
                                <i className="dot"></i>
                                <div>
                                    <h5>
                                        Universitas Teknologi Yogyakarta
                                </h5>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint obcaecati molestias et ipsa necessitatibus ex amet! Ipsum placeat sed nemo, nobis molestiae facilis dolorum quos suscipit qui hic, quas corporis.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <div className="time-table">
                                <div>
                                    <h5>2016 - 2018</h5>
                                </div>
                            </div>
                            <div className="content-table">
                                <i className="dot"></i>
                                <div>
                                    <h5>
                                        SMAN 1 Banjar
                                </h5>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint obcaecati molestias et ipsa necessitatibus ex amet! Ipsum placeat sed nemo, nobis molestiae facilis dolorum quos suscipit qui hic, quas corporis.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <div className="time-table">
                                <div>
                                    <h5>2012 - 2015</h5>
                                </div>
                            </div>
                            <div className="content-table">
                                <i className="dot"></i>
                                <div>
                                    <h5>
                                        SMPN 1 Banjar
                                </h5>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint obcaecati molestias et ipsa necessitatibus ex amet! Ipsum placeat sed nemo, nobis molestiae facilis dolorum quos suscipit qui hic, quas corporis.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <div className="time-table">
                                <div>
                                    <h5>2006 - 2012</h5>
                                </div>
                            </div>
                            <div className="content-table">
                                <i className="dot"></i>
                                <div>
                                    <h5>
                                        SD IT USWATUN HASANAH
                                </h5>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint obcaecati molestias et ipsa necessitatibus ex amet! Ipsum placeat sed nemo, nobis molestiae facilis dolorum quos suscipit qui hic, quas corporis.
                                </p>
                                </div>
                            </div>
                        </div>
                    </p>
                    <div className="my-hoby">
                        <h3 className="title">
                            MY <span>HOBBIES</span>
                        </h3>
                        <hr className="bold" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus quia vitae tempora rerum harum sequi nemo quidem eos illo facilis expedita quae, vero eveniet, numquam veritatis labore. Facere, modi.</p>
                        <br />
                        <div className="hobbies">
                            <div className="hobby">
                                <i class="fa fa-step-backward" aria-hidden="true"></i>
                                <h4 >Dancing</h4>
                            </div>
                            <div className="hobby">
                                <i class="fa fa-microphone" aria-hidden="true"></i>
                                <h4 >Singing</h4>
                            </div>
                            <div className="hobby">
                                <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                                <h4 >Cooking</h4>
                            </div>
                            <div className="hobby">
                                <i class="fa fa-flag" aria-hidden="true"></i>
                                <h4 >Badminton</h4>
                            </div>
                        </div>
                    </div>
                </div>
         </Animated>
        )
    }
}
