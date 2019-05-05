import React from 'react';
import './careers.css';
import ReactDOM from 'react-dom';
import {Services} from 'Pages/services/services';
import {Button} from 'reactstrap';

export class Careers extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container careers" id="main">
                <article id="content">
                    <header>
                        <h2>Careers</h2>
                        <p>Your family’s partner in providing quality home healthcare; love and compassion live
                            here.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-career banner-images" alt=""/>
                    </a>

                    <p> Join our team, were love and compassion reside. Come
                        and be a “helping hand” to aging adults and those in need
                        in our community. We hire the “best of the best” in the
                        home health care industry including: RNs, LPNs, CNAs and
                        Companions. If you have the expertise and are trustworthy,
                        understanding, responsive, blended with integrity and good
                        judgement, we want to meet you.</p>

                    <p className="title"> Qualifications & Requirements </p>
                    <ul>
                        <li>Speak English well enough so that an elderly
                            person can understand you and you can
                            understand them.
                        </li>
                        <li>Be able to work various shifts. We are especially
                            in need of people who can work weekends and
                            live-in schedules.
                        </li>
                        <li>Must have held a nursing license for a minimum
                            of one year.
                        </li>
                        <li>Be able to provide a minimum of three
                            employment verifications from home health
                            agencies/facilities or a combination of home
                            health agencies/facilities and private duty.
                        </li>
                        <li>Positive attitude</li>
                        <li>Strong work ethic</li>
                        <li>Compassionate and caring</li>
                    </ul>

                    <p> Our hiring process consists of several steps, including an
                        online application, a face-to-face interview, orientation
                        and further verification and reference checks. You are not
                        considered hired until you have received an official notice
                        of employment.</p>

                    <p> Thank you for your interest in employment with Handy
                        Hands Healthcare services. If you have any questions,
                        please email us or call us.</p>

                    <a className="btn btn-outline-primary btn-lg" href="../New_Employee_Application.docx" download>
                        <i className="icon fa-download"/>&nbsp;&nbsp;Application Form</a>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}