import React from 'react';
import './disabilities.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Disabilities extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container disabilities" id="main">
                <article id="content">
                    <header>
                        <h2>Adults with disabilities</h2>
                        <p>A support system for you.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-07 banner-images" alt=""/>
                    </a>
                    <p> Living at home can still be an option when you have or support someone with a mental or
                        developmental disability. In-home disability care is a common support system for individuals living
                        with acute or chronic conditions.</p>
                    <p> Professional caregivers blend in with your family while providing companionship, personal care, and
                        housekeeping support to adults with disabilities. A caregiver for your disabled loved one can enable a
                        broader range of activities, mobility, and independence for disabled adults and disabled American
                        veterans.</p>
                    <p> A caregiver can help adults with such disabilities as multiple sclerosis, muscular dystrophy, stroke
                        victims, ataxia, cerebral palsy, spina bifida, traumatic brain injury, and other neurological, physical,
                        and cognitive conditions.</p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}