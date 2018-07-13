import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import {Route, BrowserRouter} from 'react-router-dom';
import './css/styles.css';
import './css/font-awesome.css';

const store = createStore();


ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <div>
                <Route exact path = '/' component = {App} />
                <Route exact path = '/contact' component = {Contact} />
            </div>




        </BrowserRouter>



    </Provider>, document.getElementById('root'));
