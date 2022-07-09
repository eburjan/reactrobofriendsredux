import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//Provider -lepasszolja a store-t mindenhova
//connect function - make component redux aware. azaz megkapja a store-t. nem kell feliratkoznia

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './App'; //feltetelezi hogy js. Ha css van utana, akkor nem.
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers'

//we need to create the store = big object = state of the app
//createStore a reduxbol jon , reducereket merge-lni lehet, ha tobb van.
//ha letezik a store, atadhatjuk az app-nak, mint props
//root reducer-t kell ideirni
const logger=createLogger();
const rootReducer=combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
