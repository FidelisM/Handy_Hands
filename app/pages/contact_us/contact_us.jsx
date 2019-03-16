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
        );
    }
}