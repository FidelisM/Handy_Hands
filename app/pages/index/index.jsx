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
import {AboutUs} from 'Pages/about_us/about_us';
import {Careers} from 'Pages/carrers/careers';
import {SkNursing} from 'Pages/skilled_nursing/skilled_nursing';

import Applications from 'Pages/applications/applications';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {HashRouter, Route, Switch, Link, withRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'Assets/css/main.css';
import 'CSS/styles.css';
import './index.css';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            hamburgerOpen: false
        };
    }

    componentDidMount() {
        let footer = document.getElementById('footer-wrapper');

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

    render() {
        return (
            <HashRouter>
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
                                                    <DropdownToggle caret={true} color="light"
                                                                    className="dropdown-toggle">
                                                        <span className="dropdown-title">Specialties</span>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem
                                                            onClick={() => this.props.history.push('/alzheimer')}
                                                            className="btn-light">
                                                            Alzheimer’s & Dementia
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            onClick={() => this.props.history.push('/post-surgery')}
                                                            className="btn-light">Post-surgery & Rehab</DropdownItem>
                                                        <DropdownItem
                                                            onClick={() => this.props.history.push('/neuromuscular')}
                                                            className="btn-light">Neuromuscular</DropdownItem>
                                                        <DropdownItem
                                                            onClick={() => this.props.history.push('/disabilities')}
                                                            className="btn-light">Adults With
                                                            Disabilities</DropdownItem>
                                                        <DropdownItem
                                                            onClick={() => this.props.history.push('/fall')}
                                                            className="btn-light">Fall Prevention &
                                                            Recovery</DropdownItem>
                                                        <DropdownItem divider={true}/>
                                                        <DropdownItem
                                                            onClick={() => this.props.history.push('/careers')}
                                                            className="btn-light"> Careers
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            onClick={() => this.props.history.push('about-us')}
                                                            className="btn-light"> About Us
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </li>
                                            <li><Link to="/compassionate" tabIndex="0">Compassionate Care</Link></li>
                                            <li><Link to="/home-making" tabIndex="0">Home Making Care</Link></li>
                                            <li><Link to="/hospice" tabIndex="0">Hospice Care</Link></li>
                                            <li className="logo"><h1><Link to="/" tabIndex="0">Handy Hands</Link></h1>
                                            </li>
                                            <li><Link to="/live-in" tabIndex="0">Live In & Overnight Care</Link></li>
                                            <li><Link to="/personal" tabIndex="0">Personal Care</Link></li>
                                            <li><Link to="/respite" tabIndex="0">Respite Care</Link></li>
                                            <li><Link className="bold-menu" to="/skilled-nursing" tabIndex="0">
                                                Skilled Nursing</Link></li>
                                        </ul>
                                    </div>
                                    <div className="small-menu">
                                        <Dropdown className="dropdown hamburger-dropdown"
                                                  isOpen={this.state.hamburgerOpen}
                                                  toggle={this.toggleHamburger.bind(this)}>
                                            <DropdownToggle tag="span" aria-expanded={this.state.hamburgerOpen}>
                                                <span className="icon"><FontAwesomeIcon icon={faBars} size="lg"/></span>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => this.props.history.push('skilled-nursing')}
                                                              className="btn-light">Skilled Nursing</DropdownItem>
                                                <DropdownItem divider={true}/>
                                                <DropdownItem onClick={() => this.props.history.push('compassionate')}
                                                              className="btn-light">Compassionate Care</DropdownItem>
                                                <DropdownItem onClick={() => this.props.history.push('home-making')}
                                                              className="btn-light">Home Making Care
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.props.history.push('hospice')}
                                                              className="btn-light">Hospice Care</DropdownItem>
                                                <DropdownItem onClick={() => this.props.history.push('live-in')}
                                                              className="btn-light">Live In & Overnight
                                                    Care</DropdownItem>
                                                <DropdownItem onClick={() => this.props.history.push('personal')}
                                                              className="btn-light">PersonalCare
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.props.history.push('respite')}
                                                              className="btn-light">Respite Care</DropdownItem>
                                                <DropdownItem onClick={() => this.props.history.push('about-us')}
                                                              className="btn-light">About Us
                                                </DropdownItem>
                                                <DropdownItem divider={true}/>
                                                <DropdownItem
                                                    onClick={() => this.props.history.push('alzheimer')}
                                                    className="btn-light">
                                                    Alzheimer’s & Dementia
                                                </DropdownItem>
                                                <DropdownItem
                                                    onClick={() => this.props.history.push('post-surgery')}
                                                    className="btn-light">Post-surgery & Rehab</DropdownItem>
                                                <DropdownItem
                                                    onClick={() => this.props.history.push('neuromuscular')}
                                                    className="btn-light">Neuromuscular</DropdownItem>
                                                <DropdownItem
                                                    onClick={() => this.props.history.push('disabilities')}
                                                    className="btn-light">Adults With
                                                    Disabilities</DropdownItem>
                                                <DropdownItem onClick={() => this.props.history.push('fall')}
                                                              className="btn-light">Fall Prevention &
                                                    Recovery</DropdownItem>
                                                <DropdownItem divider={true}/>
                                                <DropdownItem onClick={() => this.props.history.push('careers')}
                                                              className="btn-light"> Careers
                                                </DropdownItem>
                                                <DropdownItem onClick={() => this.props.history.push('about-us')}
                                                              className="btn-light"> About Us
                                                </DropdownItem>
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
                                        recovery, wellness and prevention is unsurpassed and hedges on our understanding
                                        of
                                        the
                                        important role the family plays in these aspects.</p>
                                </div>
                            </section>
                        </div>
                        <div id="home-content">
                            <Switch>
                                <Route exact path="/" render={() => (<div><HomePage/></div>)}/>

                                <Route path="/alzheimer" render={() => (<div><Alzheimer/></div>)}/>
                                <Route path="/post-surgery" render={() => (<div><Rehab/></div>)}/>
                                <Route path="/neuromuscular" render={() => (<div><Neuromuscular/></div>)}/>
                                <Route path="/disabilities" render={() => (<div><Disabilities/></div>)}/>
                                <Route path="/fall" render={() => (<div><Fall/></div>)}/>
                                <Route path="/careers" render={() => (<div><Careers/></div>)}/>
                                <Route path="/applications" render={() => (<div><Applications/></div>)}/>

                                <Route path="/compassionate" render={() => (<div><Compassionate/></div>)}/>
                                <Route path="/home-making" render={() => (<div><HomeMaking/></div>)}/>
                                <Route path="/hospice" render={() => (<div><Hospice/></div>)}/>
                                <Route path="/live-in" render={() => (<div><LiveIn/></div>)}/>
                                <Route path="/personal" render={() => (<div><Personal/></div>)}/>
                                <Route path="/respite" render={() => (<div><Respite/></div>)}/>
                                <Route path="/about-us" render={() => (<div><AboutUs/></div>)}/>
                                <Route path="/skilled-nursing" render={() => (<div><SkNursing/></div>)}/>
                            </Switch>
                        </div>
                        <div id="footer-wrapper">
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

Index.propTypes = {
    history: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired,
    }),
};

export default withRouter(Index);