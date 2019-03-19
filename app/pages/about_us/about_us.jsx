import React from 'react';
import './about_us.css';
import ReactDOM from "react-dom";
import {Services} from "Pages/services/services";

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('services-wrapper');

        ReactDOM.render(<Services/>, container);
    }

    render() {
        return (
            <div className="container about-us" id="main">
                <article id="content">
                    <header>
                        <h2>Constance Chaduka, BSN </h2>
                        <p>Director of Nursing for Handy Hands healthcare services.</p>
                    </header>
                    {/*<a href="#" className="image featured">
                        <img className="pic-04 banner-images splash-image" alt=""/>
                    </a>*/}
                    <p>
                        Constance brings over 30 years of emergency and critical-care nursing experience that spans two
                        continents and multiple nursing specialties, having worked in several hospitals in the
                        Washington, D.C. area as well as on the African Continent. She graduated from Nursing school in
                        Zimbabwe in 1985 and has since earned multiple certifications, served multiple roles that
                        required compassion and her heartily approach to the nursing profession. since then Constance
                        has been caring for the neonate to geriatric population ever since. Through the years Constance
                        has taken special interest in assisting and working with cancer patients especially in
                        pediatrics which has earned her multiple recognitions for her effort.</p>

                    <p> Constance brings to Handy Hands healthcare services her unique brand of patient centric care
                        that also recognizes the importance of the family unit in providing results-oriented care for
                        the ailing patient. Apart from her work in the hospital unit, Constance has over the years been
                        involved in early cancer detection advocacy for underserved communities as well as Research into
                        cultural issues that affect delivery of patient care and shared nursing leadership. </p>
                    <p> Under Constance’s guidance, Handy Hands Healthcare services specializes in providing care to
                        patients and families in need. We our care professionals range from companions and respite care
                        providers all the way to level 3 nursing care. Contact us for more info.</p>
                </article>

                <div className="row features services-wrapper" id="services-wrapper">

                </div>
            </div>
        );
    }
}