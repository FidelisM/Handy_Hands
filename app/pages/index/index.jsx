import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import './css/index.css';

export class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div className="home-page">
                <div id="page-wrapper">
                    <div id="header-wrapper">
                        <div id="header" className="container">
                            <nav id="nav">
                                <ul className="flex-content">
                                    <li>
                                        <Dropdown className="dropdown services-dropdown" isOpen={this.state.dropdownOpen}
                                                  toggle={this.toggle.bind(this)}>
                                            <span className="dropdown-title">Services</span>
                                            <DropdownToggle caret color="secondary" className="dropdown-toggle"/>
                                            <DropdownMenu>
                                                <DropdownItem><a href="#">Alzheimer’s & Dementia</a></DropdownItem>
                                                <DropdownItem><a href="#">Post-surgery & Rehab</a></DropdownItem>
                                                <DropdownItem><a href="#">Neuromuscular</a></DropdownItem>
                                                <DropdownItem><a href="#">Adults With Disabilities</a></DropdownItem>
                                                <DropdownItem><a href="#">Fall Prevention & Recovery</a></DropdownItem>
                                                <DropdownItem><a href="#">Homecare Resources</a></DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>
                                    <li><a href="#" tabIndex="0">Compassionate Care</a></li>
                                    <li><a href="#" tabIndex="0">Home making Care</a></li>
                                    <li><a href="#" tabIndex="0">Hospice Care</a></li>
                                    <li className="logo"><h1><a tabIndex="0">Handy Hands</a></h1></li>
                                    <li><a href="#" tabIndex="0">Live in & overnight Care</a></li>
                                    <li><a href="#" tabIndex="0">Personal Care</a></li>
                                    <li><a href="#" tabIndex="0">Respite Care</a></li>
                                    <li><a href="#" tabIndex="0">Careers</a></li>
                                </ul>
                            </nav>

                        </div>
                        <section id="hero" className="container">
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                                sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
                                adipiscing elit. Curabitur vel sem sit.</p>
                        </section>

                    </div>

                    <div className="wrapper">
                        <div className="container">
                            <div className="row">
                                <section className="col-6 col-12-narrower feature">
                                    <div className="image-wrapper first">
                                        <a href="#" className="image featured first"><img className="pic-01 main-images"
                                                                                          alt=""/></a>
                                    </div>
                                    <header>
                                        <h2>Semper magna neque vel<br/>
                                            adipiscing curabitur</h2>
                                    </header>
                                    <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                                        sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
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
                                        sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
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

                    <div className="wrapper">
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

                    <div id="footer-wrapper">
                        <div id="footer" className="container">
                            <header className="major">
                                <h2>Euismod aliquam vehicula lorem</h2>
                                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem
                                    sit<br/>
                                    dolor neque semper magna lorem ipsum feugiat veroeros lorem ipsum dolore.</p>
                            </header>
                            <div className="row">
                                <section className="col-6 col-12-narrower">
                                    <form method="post" action="#">
                                        <div className="row gtr-50">
                                            <div className="col-6 col-12-mobile">
                                                <input name="name" placeholder="Name" type="text"/>
                                            </div>
                                            <div className="col-6 col-12-mobile">
                                                <input name="email" placeholder="Email" type="text"/>
                                            </div>
                                            <div className="col-12">
                                                <textarea name="message" placeholder="Message"/>
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input type="submit" value="Send Message"/></li>
                                                    <li><input type="reset" value="Clear form"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </section>
                                <section className="col-6 col-12-narrower">
                                    <div className="row gtr-0">
                                        <ul className="divided icons col-6 col-12-mobile">
                                            <li className="icon fa-twitter"><a href="#"><span
                                                className="extra">twitter.com/</span>untitled</a></li>
                                            <li className="icon fa-facebook"><a href="#"><span
                                                className="extra">facebook.com/</span>untitled</a></li>
                                            <li className="icon fa-dribbble"><a href="#"><span
                                                className="extra">dribbble.com/</span>untitled</a></li>
                                        </ul>
                                        <ul className="divided icons col-6 col-12-mobile">
                                            <li className="icon fa-instagram"><a href="#"><span
                                                className="extra">instagram.com/</span>untitled</a></li>
                                            <li className="icon fa-youtube"><a href="#"><span
                                                className="extra">youtube.com/</span>untitled</a></li>
                                            <li className="icon fa-pinterest"><a href="#"><span
                                                className="extra">pinterest.com/</span>untitled</a></li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div id="copyright" className="container">
                            <ul className="menu">
                                <li>&copy; Untitled. All rights reserved.</li>
                                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}