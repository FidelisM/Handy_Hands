import React from 'react';
import ReactDOM from 'react-dom';

import Index from 'Pages/index';

import './favicon.png';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(<HashRouter><Index/></HashRouter>, document.getElementById('app'));