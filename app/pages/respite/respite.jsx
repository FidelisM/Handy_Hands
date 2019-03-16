import React from 'react';
import './respite.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Respite extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container respite" id="main">
                <article id="content">
                    <header>
                        <h2>Respite Care</h2>
                        <p>Recharge emotionally and physically.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-03 banner-images" alt=""/>
                    </a>
                    <p>Respite care for the elderly, seniors, disabled adults, and those with special needs can offer
                        family and friends with care giving duty a chance to take a break from their situation.
                        It’s meant to allow you to recharge emotionally and physically to avoid burnout.
                        Respite care can include things like:</p>
                    <ul>
                        <li>Light housekeeping</li>
                        <li>Personal care such as bathing or dressing</li>
                        <li>Travel accompaniment to appointments</li>
                        <li>Grocery shopping</li>
                        <li>Errands</li>
                        <li>Skin care</li>
                        <li>Perineal care</li>
                        <li>Changing adult briefs</li>
                        <li>Repositioning if bed-bound</li>
                    </ul>
                    <p>And more.</p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}