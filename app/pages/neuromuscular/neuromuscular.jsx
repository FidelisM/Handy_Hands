import React from 'react';
import './neuromuscular.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class Neuromuscular extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container neuromuscular" id="main">
                <article id="content">
                    <header>
                        <h2>Neuromuscular</h2>
                        <p>Professional caregivers helping you live a rich and rewarding life.</p>
                    </header>
                    <a className="image featured">
                        <img className="pic-03 banner-images" alt=""/>
                    </a>
                    <p className="title"> In Home Care for Individuals Living With ALS, MS And Parkinson’s </p>
                    <p> Handy Hands healthcare services specializes in finding professional, compassionate caregivers to
                        help
                        families and individuals with neuromuscular conditions such as ALS, MS and Parkinson’s. Home
                        care,
                        respite care, and other solutions like live-in care, 24-hour care, or overnight care can help
                        relieve the
                        pressure on family members to be both family and caretakers to their loved ones with
                        neuromuscular
                        conditions.</p>

                    <p className="title"> In Home Care for ALS </p>
                    <p> ALS can create a huge challenge when it comes to day-to-day activities. But living with ALS
                        doesn’t
                        have to mean giving up your dignity and independence. If you or your loved one has been
                        diagnosed
                        with ALS, compassionate in-home caregivers can help manage a wide range of household chores,
                        personal care routines, and errands.</p>

                    <p className="title"> In Home Care for Multiple Sclerosis </p>
                    <p> The progression and severity of MS varies from person to person, but many people with MS need
                        some
                        level of support for personal care functions. Sometimes the responsibility of care falls to
                        loved ones or
                        family members, and can place significant strain on important relationships.
                        Professional caregivers can help those with advanced MS live a rich and rewarding life while
                        remaining in their own home.</p>

                    <p className="title"> In Home Care Parkinson’s </p>
                    <p> The first Activities of Daily Living (ADLs) affected by Parkinson’s disease typically include
                        the ability to
                        dress, walk, and get in and out of bed. While treatment for Parkinson’s disease can provide
                        dramatic
                        relief from symptoms, later stages may require additional support at home. You can request a
                        caregiver who has experience or specialized training in providing care for individuals with
                        Parkinson’s
                        disease.</p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}