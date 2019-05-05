import React from 'react';
import './compassionate_care.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Compassionate extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container compassionate-care" id="main">
                <article id="content">
                    <header>
                        <h2>Compassionate Care</h2>
                        <p>Caregivers and companions, committed to your happiness.</p>
                    </header>
                    <a className="image featured">
                        <img className="pic-07 banner-images" alt=""/>
                    </a>
                    <p>At Hand Makes Healthcare services, we are committed to your happiness, comfort and
                        well being in the serene environment of your home. When remaining in the comfort of your
                        house is no longer a possibility, our team of caregivers and companions can help bring the
                        feeling and ambiance of home with you.</p>
                    <p>
                        Caregivers and companions are professionals in
                        comfort and personal assistance. Their support allows families to spend quality time together
                        doing the activities they share a love. </p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}