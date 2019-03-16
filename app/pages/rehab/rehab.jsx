import React from 'react';
import './rehab.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Rehab extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container rehab" id="main">
                <article id="content">
                    <header>
                        <h2>Post-surgery & Rehabilitation</h2>
                        <p>Recovery from the comfort of your own home with one-on-one support.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-07 banner-images" alt=""/>
                    </a>
                    <p> No matter your age, post-surgery routines usually require rehabilitation. In most cases, the success of
                        your surgery depends heavily on your post-surgery recovery. Why not recover after your surgery in
                        the comfort of your own home with one-on-one support?</p>
                    <p> Caregivers can help with things like meal preparation, transportation and accompaniment to doctor’s
                        or physical therapy appointments, and housekeeping so you can rest and recover.</p>
                    <p> If your recovery limits mobility, caregivers can help you move safely, dress, bathe, or practice range-of-
                        motion exercises as prescribed by a physical therapist. They’ll even remind you to take medications on
                        time so your post-surgery at home recovery goes as smoothly as possible. As you get stronger and
                        more independent, you can change your hours and services until you’re back to 100%.</p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}