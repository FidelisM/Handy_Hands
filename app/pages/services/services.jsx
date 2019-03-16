import React from 'react';
import './services.css';

export class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container services" id="main">
                <header>
                    <p>Our Services:</p>
                </header>
                <div className="row features">
                    <section className="col-4 col-12-narrower feature section-one">
                        <div className="image-wrapper first">
                            <a className="image featured">
                                <img className="pic-07 main-images" alt=""/>
                            </a>
                        </div>
                        <header>
                            <h3>Alzheimer’s & Dementia</h3>
                        </header>
                        <p>Caregivers with experience in helping those with Alzheimer’s and dementia.</p>
                    </section>

                    <section className="col-4 col-12-narrower feature section-two">
                        <div className="image-wrapper">
                            <a className="image featured">
                                <img className="pic-01 main-images" alt=""/>
                            </a>
                        </div>
                        <header>
                            <h3>Post-surgery & Rehabilitation</h3>
                        </header>
                        <p>Recovery from the comfort of your own home with one-on-one support.</p>
                    </section>

                    <section className="col-4 col-12-narrower feature section-three">
                        <div className="image-wrapper">
                            <a className="image featured">
                                <img className="pic-02 main-images" alt=""/>
                            </a>
                        </div>
                        <header>
                            <h3>Neuromuscular</h3>
                        </header>
                        <p>Professional caregivers helping you live a rich and rewarding life.</p>
                    </section>
                </div>
            </div>
        );
    }
}