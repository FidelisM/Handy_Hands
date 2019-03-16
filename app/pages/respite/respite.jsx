import React from 'react';
import './respite.css';

export class Respite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container respite" id="main">
                <article id="content">
                    <header>
                        <h2>Respite Care</h2>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit
                            dolor neque semper.</p>
                    </header>
                    <a href="#" className="image featured">
                        <img className="pic-03 banner-images" alt=""/>
                    </a>
                    <p>Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin rhoncus, sapien
                        mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum
                        condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
                        ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque
                        eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et
                        turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius.
                        Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
                    <p>Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta velit at elementum
                        gravida nibh eget, volutpat odio. Proin rhoncus, sapien
                        mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum
                        condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
                        ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque
                        eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et
                        turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius.
                        Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
                    <p>Vestibulum pellentesque posuere lorem non aliquam. Mauris eleifend eleifend
                        felis aliquet ornare. Vestibulum porta velit at elementum elementum.</p>
                </article>

                <div className="row features">
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper first">
                            <a href="#" className="image featured">
                                <img className="pic-07 main-images" alt=""/>
                            </a>
                        </div>
                        <header>
                            <h3>Dolor sit consequat magna</h3>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                            vel sem sit dolor neque semper magna lorem ipsum.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Elevate my awareness</a></li>
                        </ul>
                    </section>
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured">
                                <img className="pic-01 main-images" alt=""/>
                            </a>
                        </div>
                        <header>
                            <h3>Dolor sit consequat magna</h3>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                            vel sem sit dolor neque semper magna lorem ipsum.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Elevate my awareness</a></li>
                        </ul>
                    </section>
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured">
                                <img className="pic-02 main-images" alt=""/>
                            </a>
                        </div>
                        <header>
                            <h3>Dolor sit consequat magna</h3>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                            vel sem sit dolor neque semper magna lorem ipsum.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Elevate my awareness</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}