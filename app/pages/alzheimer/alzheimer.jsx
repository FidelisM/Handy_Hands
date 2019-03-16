import React from 'react';
import './alzheimer.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Alzheimer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container alzheimer" id="main">
                <article id="content">
                    <header>
                        <h2>Alzheimer’s & Dementia</h2>
                        <p>Caregivers with experience in helping those with Alzheimer’s and dementia.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-07 banner-images" alt=""/>
                    </a>
                    <p> Symptoms of early Alzheimer’s and other forms of dementia typically include difficulty
                        concentrating
                        and remembering simple items or tasks. In later stages, someone may be unable to care for
                        themselves without assistance.</p>
                    <p> Advanced symptoms like confusion, withdrawal, or wandering and getting lost
                        can
                        present a challenge for families. Home care for people with Alzheimer’s or dementia is one way
                        to give
                        them the help they need in a familiar environment.</p>
                    <p> Handy Hands health care services specializes in referring caregivers with experience in helping
                        those
                        with Alzheimer’s and dementia and providing assistance to them and their families. These
                        caregivers
                        understand that they may have to reintroduce themselves to your mom or dad every time they come
                        through the door. They know they may have to prepare meals carefully if utensils become too
                        difficult
                        to manage. They know how to stimulate short term memory through cognitive activities, while
                        interacting in your parent’s reality and helping them to reminisce about happy memories.</p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}