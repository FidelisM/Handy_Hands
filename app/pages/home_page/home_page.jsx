import React from 'react';
import './home_page.css';
import ReactDOM from 'react-dom';
import {Services} from 'Pages/services/services';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container home-page-content">
                <div className="wrapper" id="top-wrapper">
                    <header className="major">
                        <h2>Our Core Values</h2>
                    </header>
                    <div className="container">
                        <div className="mnemonic"><p className="mnemonic-text"><span
                            className="bold-leader">S</span>ervice Excellence: We promise and deliver quality
                            service to meet and exceed
                            the needs of patients and clients.</p></div>
                        <div className="mnemonic"><p className="mnemonic-text"><span
                            className="bold-leader">E</span>nterprising Work Ethic: We promote personal and
                            organizational progress
                            through innovating and incorporating leading practices.</p></div>
                        <div className="mnemonic"><p className="mnemonic-text"><span
                            className="bold-leader">R</span>espect and Compassion: We pledge to treat every Vision
                            team member, patient,
                            and client with the utmost respect and dignity. We also recognize that Vision is in the
                            business of improving lives, and as a result, we expect that every team member
                            exhibits heartfelt compassion and empathy in every interaction, every day.</p>
                            <span className="icon" id="icon-1"><FontAwesomeIcon icon={faPlus} size="xs"/></span>
                        </div>
                        <div className="mnemonic"><p className="mnemonic-text"><span
                            className="bold-leader">V</span>igilant focus on today and tomorrow:
                            We embrace change and utilize the best people and processes to improve ourselves
                            and our services.</p></div>
                        <div className="mnemonic"><p className="mnemonic-text"><span
                            className="bold-leader">I</span>ndividualized quality: Care that meets the total needs
                            of the patient and family
                            whose care can be safely and effectively managed in the home care environment
                            without regards to race, sex, religion, or age.</p>
                            <span className="icon" id="icon-2"><FontAwesomeIcon icon={faPlus} size="xs"/></span></div>
                        <div className="mnemonic"><p className="mnemonic-text"><span
                            className="bold-leader">C</span>ontinuous Growth and Improvement: We are focused on
                            today and tomorrow.
                            We embrace change and utilize the best people and processes to improve ourselves
                            and our services.</p><span className="icon" id="icon-3"><FontAwesomeIcon icon={faPlus} size="xs"/></span>
                        </div>
                        <div className="mnemonic"><p className="mnemonic-text"><span
                            className="bold-leader">E</span>thical Behavior and Integrity: We are dedicated to the
                            highest level of
                            compliance and personal integrity. We believe in doing the right thing and expect this
                            behavior from others.</p>
                            <span className="icon" id="icon-4">
                                <FontAwesomeIcon icon={faPlus} size="xs"/></span></div>
                    </div>
                </div>

                <div id="promo-wrapper">
                    <div className="main-logo sub-logo"/>
                    <section id="promo">
                        <h2>To be the best Partner to our Clients and families Our expertise together with our knowledge
                            gained from decades of Nursing experience brought to the market by our founder and the
                            personalized approach to caring for families is why we matter.</h2>
                    </section>
                </div>

                <div className="wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}