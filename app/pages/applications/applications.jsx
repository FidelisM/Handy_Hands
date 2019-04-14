import React from 'react';

import {Button} from 'reactstrap';
import {Route, Switch, withRouter} from 'react-router-dom';

import {App_Intro} from 'Pages/applications/sections/intro';
import {App_Basic} from 'Pages/applications/sections/basic';
import {createStorage, getStorage, setStorage} from 'Common/storageManager';
import services from 'Common/service-directory';
import serviceManager from 'Common/service-manager';

import './applications.css';

class Applications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNo: 0,
            paths: ['/applications', '/applications/basic'],
            data: {}
        };

        this.state.pageNo = this.state.paths.indexOf(this.props.location.pathname);

        if (!getStorage('application')) {
            createStorage('application')
        } else {
            this.state.data = getStorage('application')
        }
    }

    _resize() {
        let header = document.getElementById('header-wrapper');

        window.scrollTo(0, header.clientHeight)
    }

    _handlePageChange(actions) {
        let pageNumber;

        switch (actions) {
            case 'first':
                pageNumber = 0;
                break;
            case 'next':
                pageNumber = this.state.pageNo += 1;
                break;
            case 'prev':
                pageNumber = this.state.pageNo -= 1;
                break;
            case 'last':
                pageNumber = this.state.paths.length - 1;
                break;
            default:
                break;
        }

        this.setState({
            pageNo: pageNumber
        });

        this._resize();
        this.props.history.push(this.state.paths[pageNumber]);
    }

    _handleFormUpdate(update) {
        let data = this.state.data;

        setStorage('application', Object.assign(data, update));

        this.setState({
            data: Object.assign(data, update)
        });
    }

    _submitForm() {
        let self = this,
            options = {
                data: this.state.data,
                url: services.application.url
            };

        serviceManager.post(options).then(function (response) {
            (response.success) ? self._handleApplicationSuccess(response) : self._handleApplicationFailure(response);
        }).catch(self._handleApplicationFailure.bind(self));
    }

    _handleApplicationSuccess(response) {

    }

    _handleApplicationFailure(response) {

    }

    render() {
        return (
            <div className="container applications" id="main">
                <article id="content">
                    <header>
                        <h2>Application Form</h2>
                    </header>

                    <Switch>
                        <Route exact path="/applications"
                               render={() => (<div><App_Intro data={this.state.data}
                                                              handleFormUpdate={this._handleFormUpdate.bind(this)}/>
                               </div>)}/>
                        <Route path="/applications/basic"
                               render={() => (<div><App_Basic data={this.state.data}
                                                              handleFormUpdate={this._handleFormUpdate.bind(this)}/>
                               </div>)}/>
                    </Switch>
                </article>

                <div className="nav-buttons" id="nav-button-wrapper">
                    <Button color="secondary" className="page-buttons first-page fa fa-angle-double-left"
                            onClick={this._handlePageChange.bind(this, 'first')} disabled={(this.state.pageNo === 0)}/>
                    <Button color="secondary" className="page-buttons prev-page" disabled={(this.state.pageNo <= 0)}
                            onClick={this._handlePageChange.bind(this, 'prev')}>Previous</Button>
                    <Button color="secondary" className="page-buttons next-page"
                            disabled={(this.state.pageNo >= (this.state.paths.length - 1))}
                            onClick={this._handlePageChange.bind(this, 'next')}>Next</Button>
                    <Button color="secondary" className="page-buttons last-page fa fa-angle-double-right"
                            disabled={(this.state.pageNo === (this.state.paths.length - 1))}
                            onClick={this._handlePageChange.bind(this, 'last')}/>
                </div>
                <div className="submit-button-wrapper">
                    <Button color="primary" className="submit-app pull-right" disabled={false}
                            onClick={this._submitForm.bind(this)}>Submit
                        Application</Button>
                </div>
            </div>
        );
    }
}

Applications.propTypes = {
    history: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired,
    }),
};

export default withRouter(Applications);