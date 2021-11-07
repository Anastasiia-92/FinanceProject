const initialState = []


export const favoriteTickersReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'favoriteTickersReducer/SET-FAV-TICKER':
            return [
                ...state,
                action.ticker
            ];
        case 'favoriteTickersReducer/REMOVE-FAV-TICKER': {
            return state.filter(el => el.ticker !== action.ticker.ticker)

        }
        default:
            return state;
    }
};

//actions
export const setFavTickersAC = (ticker) =>
    ({type: 'favoriteTickersReducer/SET-FAV-TICKER', ticker})

export const removeTickerFromFavAC = (ticker) =>
    ({type: 'favoriteTickersReducer/REMOVE-FAV-TICKER', ticker})

//thunks
export const setFavTickersTC = (tickerName) =>
    dispatch => {
        dispatch(setFavTickersAC(tickerName))
    }

export const removeTickerFromFavTC = (tickerName) =>
    (dispatch, getState) => {
        const ticker = getState().favTickers.find(el => el.ticker === tickerName)
        dispatch(removeTickerFromFavAC(ticker))
    }
