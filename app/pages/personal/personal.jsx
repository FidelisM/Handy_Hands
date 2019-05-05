import React from 'react';
import './personal.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Personal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container personal" id="main">
                <article id="content">
                    <header>
                        <h2>Personal Care</h2>
                        <p>Clean, comfortable, and looking your best.</p>
                    </header>
                    <a className="image featured">
                        <img className="pic-05 banner-images splash-image" alt=""/>
                    </a>
                    <p>Personal care and hygiene services help seniors and disabled adults with
                        daily activities they once did for themselves, including,
                        but not limited to bathing or brushing their teeth. These in home
                        services can vary widely depending on your needs, but the goal is to keep clients clean,
                        comfortable, and looking their best.</p>
                    <p>Services include:</p>
                    <ul>
                        <li>Bathing</li>
                        <li>Hair care</li>
                        <li>Oral care</li>
                        <li>Dressing</li>
                        <li>Grooming</li>
                        <li>Skin care</li>
                        <li>Perineal care</li>
                        <li>Changing adult briefs</li>
                        <li>Repositioning if bed-bound</li>
                    </ul>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}