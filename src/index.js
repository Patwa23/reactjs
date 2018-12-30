import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware , compose , combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import { watchAuth, watchBurgerBuilder, watchOrder } from './store/sagas/index';

axios.defaults.baseURL='https://react-my-burger-f7346.firebaseio.com/';
axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['Content-Type']='application/json'; 

axios.interceptors.request.use(request =>{
  //  console.log(request);
    return request;
},error =>{
 //   console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response =>{
  //  console.log(response);
    return response;
},error =>{
 //   console.log(error);
    return Promise.reject(error);
});
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducers= combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers,composeEnhancers(
    applyMiddleware(thunk,sagaMiddleware)
));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuilder);
sagaMiddleware.run(watchOrder);
const app =(
    <Provider store = {store} >
        <BrowserRouter basename="/pvrburger/">
            <App title = "My First React JS"/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
