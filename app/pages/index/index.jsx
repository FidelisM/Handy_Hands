import React from 'react';
import ReactDOM from 'react-dom';

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import {HomePage} from 'Pages/home_page/home_page';
import {Compassionate} from 'Pages/compassionate_care/compassionate_care';
import {HomeMaking} from 'Pages/home_making/home_making';
import {Hospice} from 'Pages/hospice/hospice';
import {LiveIn} from 'Pages/live_in/live_in';
import {Personal} from 'Pages/personal/personal';
import {Respite} from 'Pages/respite/respite';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'Assets/css/main.css';
import 'CSS/styles.css';
import './index.css';

export class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    }

    componentDidMount() {
        let container = document.getElementById('home-content');

        ReactDOM.render(<HomePage/>, container);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    _handleLinkClick(page) {
        let container = document.getElementById('home-content');

        switch (page) {
            case 'compassionate':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Compassionate/>, container);
                break;
            case 'home-making':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<HomeMaking/>, container);
                break;
            case 'hospice':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Hospice/>, container);
                break;
            case 'live-in':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<LiveIn/>, container);
                break;
            case 'personal':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Personal/>, container);
                break;
            case 'respite':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Respite/>, container);
                break;
            case 'home':
            default:
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<HomePage/>, container);
                break;
        }
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
                                        <Dropdown className="dropdown services-dropdown"
                                                  isOpen={this.state.dropdownOpen}
                                                  toggle={this.toggle.bind(this)}>
                                            <span className="dropdown-title">Services</span>
                                            <DropdownToggle caret={true} color="light" className="dropdown-toggle"/>
                                            <DropdownMenu>
                                                <DropdownItem className="btn-light">Alzheimer’s &
                                                    Dementia</DropdownItem>
                                                <DropdownItem className="btn-light">Post-surgery & Rehab</DropdownItem>
                                                <DropdownItem className="btn-light">Neuromuscular</DropdownItem>
                                                <DropdownItem className="btn-light">Adults With
                                                    Disabilities</DropdownItem>
                                                <DropdownItem className="btn-light">Fall Prevention &
                                                    Recovery</DropdownItem>
                                                <DropdownItem className="btn-light">Homecare Resources</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>
                                    <li><a onClick={this._handleLinkClick.bind(this, 'compassionate')} tabIndex="0">Compassionate
                                        Care</a></li>
                                    <li><a onClick={this._handleLinkClick.bind(this, 'home-making')} tabIndex="0">Home
                                        Making Care</a>
                                    </li>
                                    <li><a onClick={this._handleLinkClick.bind(this, 'hospice')} tabIndex="0">Hospice
                                        Care</a></li>
                                    <li className="logo">
                                        <h1><a tabIndex="0" onClick={this._handleLinkClick.bind(this, 'home')}>Handy
                                            Hands</a></h1></li>
                                    <li><a onClick={this._handleLinkClick.bind(this, 'live-in')} tabIndex="0">Live In &
                                        Overnight
                                        Care</a></li>
                                    <li><a onClick={this._handleLinkClick.bind(this, 'personal')} tabIndex="0">Personal
                                        Care</a>
                                    </li>
                                    <li><a onClick={this._handleLinkClick.bind(this, 'respite')} tabIndex="0">Respite
                                        Care</a></li>
                                    <li><a onClick={this._handleLinkClick.bind(this, 'careers')}
                                           tabIndex="0">Careers</a></li>
                                </ul>
                            </nav>

                        </div>
                        <section id="hero" className="container">
                            <div className="main-logo"/>
                            <p className="mission-statement">Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                                sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
                                adipiscing elit. Curabitur vel sem sit.</p>
                        </section>

                    </div>

                    <div id="home-content">
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