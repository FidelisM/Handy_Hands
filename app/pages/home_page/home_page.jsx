import React from 'react';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container home-page-content">
                <div className="wrapper" id="top-wrapper">
                    <div className="container">
                        <div className="row">
                            <section className="col-6 col-12-narrower feature">
                                <div className="image-wrapper first">
                                    <a href="#" className="image featured first"><img
                                        className="pic-01 main-images"
                                        alt=""/></a>
                                </div>
                                <header>
                                    <h2>Semper magna neque vel<br/>
                                        adipiscing curabitur</h2>
                                </header>
                                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                                    sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et
                                    sed
                                    adipiscing elit. Curabitur vel sem sit.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Elevate my awareness</a></li>
                                </ul>
                            </section>
                            <section className="col-6 col-12-narrower feature">
                                <div className="image-wrapper">
                                    <a href="#" className="image featured"><img className="pic-02 main-images"
                                                                                alt=""/></a>
                                </div>
                                <header>
                                    <h2>Amet lorem ipsum dolor<br/>
                                        sit consequat magna</h2>
                                </header>
                                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                                    sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et
                                    sed
                                    adipiscing elit. Curabitur vel sem sit.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Elevate my awareness</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>

                <div id="promo-wrapper">
                    <section id="promo">
                        <h2>Neque semper magna et lorem ipsum adipiscing</h2>
                        <a href="#" className="button">Breach the thresholds</a>
                    </section>
                </div>

                <div className="wrapper" id="mid-body-wrapper">
                    <section className="container">
                        <header className="major">
                            <h2>Sed magna consequat lorem curabitur tempus</h2>
                            <p>Elit aliquam vulputate egestas euismod nunc semper vehicula lorem blandit</p>
                        </header>
                        <div className="row features">
                            <section className="col-4 col-12-narrower feature">
                                <div className="image-wrapper first">
                                    <a href="#" className="image featured"><img className="pic-03 footer-images"
                                                                                alt=""/></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                                    vel sem sit dolor neque semper magna lorem ipsum.</p>
                            </section>
                            <section className="col-4 col-12-narrower feature">
                                <div className="image-wrapper">
                                    <a href="#" className="image featured"><img className="pic-04 footer-images"
                                                                                alt=""/></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                                    vel sem sit dolor neque semper magna lorem ipsum.</p>
                            </section>
                            <section className="col-4 col-12-narrower feature">
                                <div className="image-wrapper">
                                    <a href="#" className="image featured"><img className="pic-05 footer-images"
                                                                                alt=""/></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                                    vel sem sit dolor neque semper magna lorem ipsum.</p>
                            </section>
                        </div>
                        <ul className="actions major">
                            <li><a href="#" className="button">Elevate my awareness</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}