import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/order';

export function* purchaseBurgerSaga(action){
    yield put(actions.purchaseBurgerStart());
    try{
        const response = yield axios.post('/orders.json?auth='+action.token, action.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name,action.orderData));
    }catch(error){
        yield put(actions.purchaseBurgerFail(error));
    };
};

export function* fetchOrdersSaga(action){
        yield put(actions.fetchOrdersStart());
        const queryParams = '?auth='+action.token+'&orderBy="userId"&equalTo="' +action.userId+ '"';
        try{
            const reponse = yield axios.get('/orders.json'+queryParams);
            const fetchedOrders = [];
            for(let key in reponse.data){
                fetchedOrders.push({
                    ...reponse.data[key],
                    id:key
                });
            }
            yield put(actions.fetchOrdersSuccess(fetchedOrders));
        }catch(error){
            yield put(actions.fetchOrdersFail(error));
        };
}