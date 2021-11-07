import React, {useEffect, useState} from "react";
import s from "./Button.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {removeTickerFromFavTC, setFavTickersTC} from "../../state/favorite-tickers-reducer";


export function Button({ticker, isMainList}) {

    const favTicker = ticker
    const btnForMainList = isMainList
    const favoriteTickers = useSelector(state => state.favTickers)
    const dispatch = useDispatch()
    const [disableForAdd, setDisableForAdd] = useState(false)

    useEffect(() => {
        let isTickerFav = favoriteTickers.findIndex(el => el.ticker === ticker.ticker)
        isTickerFav > -1 ? setDisableForAdd(true) : setDisableForAdd(false)
    },[dispatch,favoriteTickers] )

    const addTickerToFav = () => {
        dispatch(setFavTickersTC(favTicker))
    }
    const removeTickerFromFav = () => {
        dispatch(removeTickerFromFavTC(ticker.ticker))
    }

    return btnForMainList
        ? <button className={s.button}
                  disabled={disableForAdd}
                  onClick={addTickerToFav}>
            Add to favorite
        </button>

        : <button className={s.button}
                  onClick={removeTickerFromFav}>
            Remove from favorite
        </button>


}