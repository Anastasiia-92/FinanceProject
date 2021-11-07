
const initialState = []

export const tickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'tickersReducer/SET-TICKERS':{
          return  action.data.map((el, index) => {
                return {
                    ...el,
                    isProfit: state.length > 0 && state[index].price < action.data[index].price
                }
            })
    }
        default:
            return state;
    }
};

//actions
export const setTickersAC = (data) =>
    ({type: 'tickersReducer/SET-TICKERS', data})

//thunks
export const setTickersTC = (data) =>
     dispatch => {
            dispatch(setTickersAC(data));

    }

