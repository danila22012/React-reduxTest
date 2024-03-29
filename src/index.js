import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './config/reducer';
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(    
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));


// rm -rf .git delete current git