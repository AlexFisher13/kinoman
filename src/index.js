import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import App from './components/App';
import reducer from './reducers'

const store = configureStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
