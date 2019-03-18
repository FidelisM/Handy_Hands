import React from 'react';
import './contact_us.css';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container contact-us" id="main">
                <div id="footer" className="container">
                    <header className="major">
                        <h2>Contact Us:</h2>
                        <p>Let us serve you.</p>
                    </header>
                    <div className="row">
                        <section className="col-6 col-12-narrower">
                            <form method="post" action="#">
                                <div className="row gtr-50">
                                    <div className="col-6 col-12-mobile">
                                        <input name="name" placeholder="Name" type="text" disabled={true}/>
                                    </div>
                                    <div className="col-6 col-12-mobile">
                                        <input name="email" placeholder="Email" type="text" disabled={true}/>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" placeholder="Message" disabled={true}/>
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input type="submit" value="Send Message" disabled={true}/></li>
                                            <li><input type="reset" value="Clear form" disabled={true}/></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </section>
                        <section className="col-6 col-12-narrower">
                            <div className="row gtr-0">
                                <ul className="divided icons col-6 col-12-mobile">
                                    <li className="icon fa-phone"><a>240-780-8578</a></li>
                                </ul>
                                <ul className="divided icons col-6 col-12-mobile">
                                    <li className="icon fa-at"><a>handyhandsmd@gmail.com</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
                <div id="copyright" className="container">
                    <ul className="menu">
                        <li>&copy; Handy Hands MD. All rights reserved.</li>
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
