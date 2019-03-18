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
import {Contact} from 'Pages/contact_us/contact_us';
import {Alzheimer} from 'Pages/alzheimer/alzheimer';
import {Rehab} from 'Pages/rehab/rehab';
import {Neuromuscular} from 'Pages/neuromuscular/neuromuscular';
import {Disabilities} from 'Pages/disabilities/disabilities';
import {Fall} from 'Pages/fall/fall';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'Assets/css/main.css';
import 'CSS/styles.css';
import './index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


export class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            hamburgerOpen: false
        };
    }

    componentDidMount() {
        let container = document.getElementById('home-content'),
            footer = document.getElementById('footer-wrapper');

        ReactDOM.render(<HomePage/>, container);
        ReactDOM.render(<Contact/>, footer);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggleHamburger() {
        this.setState(prevState => ({
            hamburgerOpen: !prevState.hamburgerOpen
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

    _handleDropdownClick(page) {
        let container = document.getElementById('home-content');

        switch (page) {
            case 'alzheimer':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Alzheimer/>, container);
                break;
            case 'post-surgery':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Rehab/>, container);
                break;
            case 'neuromuscular':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Neuromuscular/>, container);
                break;
            case 'disabilities':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Disabilities/>, container);
                break;
            case 'fall':
                ReactDOM.unmountComponentAtNode(container);
                ReactDOM.render(<Fall/>, container);
                break;
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
                                <div className="large-menu">
                                    <ul className="flex-content">
                                        <li>
                                            <Dropdown className="dropdown services-dropdown"
                                                      isOpen={this.state.dropdownOpen}
                                                      toggle={this.toggle.bind(this)}>
                                                <DropdownToggle caret={true} color="light" className="dropdown-toggle">
                                                    <span className="dropdown-title">Specialties</span>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem
                                                        onClick={this._handleDropdownClick.bind(this, 'alzheimer')}
                                                        className="btn-light">
                                                        Alzheimer’s & Dementia
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={this._handleDropdownClick.bind(this, 'post-surgery')}
                                                        className="btn-light">Post-surgery & Rehab</DropdownItem>
                                                    <DropdownItem
                                                        onClick={this._handleDropdownClick.bind(this, 'neuromuscular')}
                                                        className="btn-light">Neuromuscular</DropdownItem>
                                                    <DropdownItem
                                                        onClick={this._handleDropdownClick.bind(this, 'disabilities')}
                                                        className="btn-light">Adults With
                                                        Disabilities</DropdownItem>
                                                    <DropdownItem onClick={this._handleDropdownClick.bind(this, 'fall')}
                                                                  className="btn-light">Fall Prevention &
                                                        Recovery</DropdownItem>
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
                                        <li><a onClick={this._handleLinkClick.bind(this, 'live-in')} tabIndex="0">Live
                                            In &
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
                                </div>
                                <div className="small-menu">
                                    <Dropdown className="dropdown hamburger-dropdown" isOpen={this.state.hamburgerOpen}
                                              toggle={this.toggleHamburger.bind(this)}>
                                        <DropdownToggle tag="span" aria-expanded={this.state.hamburgerOpen}>
                                            <span className="icon"><FontAwesomeIcon icon={faBars} size="lg"/></span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem
                                                onClick={this._handleLinkClick.bind(this, 'compassionate')}
                                                className="btn-light">Compassionate Care</DropdownItem>
                                            <DropdownItem
                                                onClick={this._handleLinkClick.bind(this, 'home-making')}
                                                className="btn-light">Home Making Care
                                            </DropdownItem>
                                            <DropdownItem onClick={this._handleLinkClick.bind(this, 'hospice')}
                                                          className="btn-light">Hospice Care</DropdownItem>
                                            <DropdownItem onClick={this._handleLinkClick.bind(this, 'live-in')}
                                                          className="btn-light">Live In & Overnight Care</DropdownItem>
                                            <DropdownItem onClick={this._handleLinkClick.bind(this, 'personal')}
                                                          className="btn-light">PersonalCare
                                            </DropdownItem>
                                            <DropdownItem onClick={this._handleLinkClick.bind(this, 'respite')}
                                                          className="btn-light">Respite Care</DropdownItem>
                                            <DropdownItem onClick={this._handleLinkClick.bind(this, 'careers')}
                                                          className="btn-light">Careers
                                            </DropdownItem>
                                            <DropdownItem divider={true}/>
                                            <DropdownItem
                                                onClick={this._handleDropdownClick.bind(this, 'alzheimer')}
                                                className="btn-light">
                                                Alzheimer’s & Dementia
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={this._handleDropdownClick.bind(this, 'post-surgery')}
                                                className="btn-light">Post-surgery & Rehab</DropdownItem>
                                            <DropdownItem
                                                onClick={this._handleDropdownClick.bind(this, 'neuromuscular')}
                                                className="btn-light">Neuromuscular</DropdownItem>
                                            <DropdownItem
                                                onClick={this._handleDropdownClick.bind(this, 'disabilities')}
                                                className="btn-light">Adults With
                                                Disabilities</DropdownItem>
                                            <DropdownItem onClick={this._handleDropdownClick.bind(this, 'fall')}
                                                          className="btn-light">Fall Prevention &
                                                Recovery</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </nav>
                        </div>
                        <section id="hero" className="container">
                            <div className="main-logo"/>
                            <div className="mission-statement">
                                <p>We aim at providing the highest level of care to our
                                    clients using a holistic approach to make
                                    sure all aspects of their needs are understood and well taken care of. </p>
                                <p>Our commitment to the
                                    recovery, wellness and prevention is unsurpassed and hedges on our understanding of
                                    the
                                    important role the family plays in these aspects.</p>
                            </div>
                        </section>
                    </div>

                    <div id="home-content">
                    </div>

                    <div id="footer-wrapper">
                    </div>
                </div>
            </div>
        );
    }
}