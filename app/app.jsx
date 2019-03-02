import React from 'react';
import ReactDOM from 'react-dom';
import {Index} from './pages/index/index';


const message = 'This is boiler-plate code for telephasic.';
ReactDOM.render(<Index message={message}/>, document.getElementById('app'));