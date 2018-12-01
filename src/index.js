import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL='https://react-my-burger-f7346.firebaseio.com/';
axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['Content-Type']='application/json'; 

axios.interceptors.request.use(request =>{
    console.log(request);
    return request;
},error =>{
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response =>{
    console.log(response);
    return response;
},error =>{
    console.log(error);
    return Promise.reject(error);
});

    const app =(
        <BrowserRouter basename="/">
            <App title = "My First React JS"/>
        </BrowserRouter>
    );

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
