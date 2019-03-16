import React from 'react';
import './home_making.css';
import ReactDOM from 'react-dom';
import {Services} from 'Pages/services/services';

export class HomeMaking extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container home-making" id="main">
                <article id="content">
                    <header>
                        <h2>Home Making</h2>
                        <p>Creating a life-giving home.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-06 banner-images splash-image" alt=""/>
                    </a>
                    <p>Our homemaking services include but are not limited to:</p>
                    <ul>
                        <li>Light housekeeping</li>
                        <li>Assistance with organization</li>
                        <li>Grocery shopping</li>
                        <li>Meal planning</li>
                        <li>Cooking</li>
                        <li>Bed-making</li>
                        <li>Changing bed linens</li>
                        <li>Plant care</li>
                        <li>Laundry</li>
                    </ul>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}