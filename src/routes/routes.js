import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Kiri from '../component/Kiri';
import Navbar from '../component/Navbar';
import Home from '../container/Home';
import Profile from '../container/Profile'
import '../style/Routes.css'

export default function routes() {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Kiri/>
                    </div>
                    <div className="col-md-8">
                        <Navbar/>
                        <Route exact path="/" component={Home} />
                        <Route path="/profile" component={Profile} />
                    </div>
                </div>    
            </div>
        </Router>
    )
}
