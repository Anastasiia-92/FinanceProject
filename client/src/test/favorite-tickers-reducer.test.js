import '@testing-library/jest-dom';
import {
    favoriteTickersReducer,
    removeTickerFromFavAC,
    setFavTickersAC
} from "../state/favorite-tickers-reducer";


test('tickers should be added to favorite state correct', () => {
    const startState = []

    const ticker = {
        "ticker": "GOOGL",
        "exchange": "NASDAQ",
        "price": 237.08,
        "change": 154.38,
        "change_percent": 0.10,
        "dividend": 0.46,
        "yield": 1.18,
        "last_trade_time": "2021-04-30T11:53:21.000Z"
    }

    const action = setFavTickersAC(ticker);

    const endState = favoriteTickersReducer(startState, action)

    expect(endState.length).toBe(1);
    expect(endState[0].ticker).toBe("GOOGL");

});
test('tickers should be removed from favorite state correct', () => {
    const startState = [
        {
            "ticker": "GOOGL",
            "exchange": "NASDAQ",
            "price": 237.08, "change": 154.38,
            "change_percent": 0.10,
            "dividend": 0.46,
            "yield": 1.18,
            "last_trade_time": "2021-04-30T11:53:21.000Z"
        },
        {
            "ticker": "MSFT",
            "exchange": "NASDAQ",
            "price": 261.46,
            "change": 161.45,
            "change_percent": 0.41,
            "dividend": 0.18,
            "yield": 0.98,
            "last_trade_time": "2021-04-30T11:53:21.000Z"
        }
    ]
    const tickerForRemove = {
        "ticker": "MSFT",
        "exchange": "NASDAQ",
        "price": 261.46,
        "change": 161.45,
        "change_percent": 0.41,
        "dividend": 0.18,
        "yield": 0.98,
        "last_trade_time": "2021-04-30T11:53:21.000Z"
    }
    const action = removeTickerFromFavAC(tickerForRemove);

    const endState = favoriteTickersReducer(startState, action)

    expect(endState.length).toBe(1);
    expect(endState[0].ticker).toBe("GOOGL");

});
