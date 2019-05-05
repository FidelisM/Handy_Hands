import React from 'react';
import './skilled_nursing.css';
import ReactDOM from 'react-dom';
import {Services} from 'Pages/services/services';

export class SkNursing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }


    render() {
        return (
            <div className="container skilled-nursing" id="main">
                <article id="content">
                    <header>
                        <h2>Skilled Nursing</h2>
                        <p>Skilled, trained, and highly qualified nurses.</p>
                    </header>
                    <a className="image featured">
                        <img className="pic-01 banner-images splash-image" alt=""/>
                    </a>
                    <p>We have skilled, trained, and highly qualified nurses who are here to support and assist you in
                        attaining health and home independence. Because your recovery is important to us, our skilled
                        nurses, in coordination with your physician, are able to create a unique plan of care,
                        personalized to your needs. This ensures the efficacy of our services and our workforce behind
                        it. </p>
                    <p>Skilled nursing services include but are not limited to:</p>
                    <ul className="skill-list">
                        <li>Diabetic Care</li>
                        <li>Tube Feeding</li>
                        <li>Catheter Care</li>
                        <li>Wound Care</li>
                        <li>Blood Drawing</li>

                        <li>Respiratory Care</li>
                        <li>Infusion Therapy</li>
                        <li>Incontinence Care</li>
                        <li>Post-operative Care</li>
                        <li>Monitoring Nutrition</li>

                        <li>Monitoring Vital Signs</li>
                        <li>Intravenous Therapy</li>
                        <li>Transferring Assistance</li>
                        <li>Blood Sugar Monitoring</li>
                        <li>Patient and Family Education</li>

                        <li>Pain and Symptom Management</li>
                        <li>Applying or Injecting Treatment Medications</li>
                    </ul>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}