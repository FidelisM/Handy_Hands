import React from 'react';
import './fall.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Fall extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container fall" id="main">
                <article id="content">
                    <header>
                        <h2>Fall Prevention & Recovery</h2>
                        <p>A support system for you.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-01 banner-images" alt=""/>
                    </a>
                    <p className="title"> Preventing Falls at Home </p>
                    <p> There are a few quick ways to help with fall prevention at home. You can tape down any throw
                        rugs in
                        hallways and rooms so people don’t trip over the corners. You might also consider night lights
                        in
                        hallways to help avoid falls when using the restroom at night and adding non-slip mats in the
                        kitchen
                        and bathroom.</p>
                    <p className="title"> Home Care Can Help with Fall Recovery </p>
                    <p> If your loved one has recently fallen, a caregiver can support them at home in recovery. Having
                        in-
                        home help also improves the chances of preventing falls from happening in the first place.
                        Caregivers
                        can encourage regular exercise and prompt a loved one to take medications on time, which can
                        lower
                        the risk for side effects like dizziness. They can also eliminate fall hazards around the home
                        and
                        provide stability and assistance in slippery areas like the bathroom or kitchen.</p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}