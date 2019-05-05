import React from 'react';
import './hospice.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Hospice extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container hospice" id="main">
                <article id="content">
                    <header>
                        <h2>Hospice Care</h2>
                        <p>The perfect caregiver for your situation.</p>
                    </header>
                    <a className="image featured">
                        <img className="pic-04 banner-images splash-image" alt=""/>
                    </a>
                    <p>Palliative care is any type of care that focuses on making a sick person feel comfortable, rather than
                        curing the illness. Sometimes known as end of life care, hospice care is a type of palliative care for
                        individuals who are in the last stages of a serious illness and have decided not to pursue curative
                        treatments. In general, the purpose of hospice care centers on symptom relief, comfort, and
                        emotional-spiritual support.</p>
                        <p>
                        Our approach to hospice and palliative care at home or at a facility is simple: help families spend
                        quality time together by matching them with the perfect caregiver for their situation. A caregiver
                        can help with day-to-day activities like bathing or dressing or provide support and companionship
                        for the sick individual.</p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}