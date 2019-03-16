import React from 'react';
import './live_in.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class LiveIn extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }


    render() {
        return (
            <div className="container live-in" id="main">
                <article id="content">
                    <header>
                        <h2>Live In & Overnight Care</h2>
                        <p>Always there to help.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-01 banner-images splash-image" alt=""/>
                    </a>
                    <p>Overnight care is about knowing someone is there to help if a loved one needs fluids, snacks, or
                        help using the restroom. It’s perfect for people who have trouble sleeping through the night or
                        tend to wake up disoriented.
                        With overnight care, a caregiver comes by the house to provide a few hours of care before bed
                        and in the morning.</p>
                    <p>In addition to providing homemaking and companionship services, overnight
                        caregivers can provide a number of personal care services, including but not limited to:</p>
                    <ul>
                        <li>Bathing</li>
                        <li>Hair care</li>
                        <li>Oral care</li>
                        <li>Dressing</li>
                        <li>Grooming</li>
                    </ul>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}