import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import {tickersReducer} from "./tickers-reducer";
import {favoriteTickersReducer} from "./favorite-tickers-reducer";



export const rootReducer = combineReducers({
    tickers: tickersReducer,
    favTickers: favoriteTickersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

