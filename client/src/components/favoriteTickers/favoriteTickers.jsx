import React from "react";
import s from "./favoriteTickers.module.scss";
import {Ticker} from "../ticker/Ticker";
import {useSelector} from "react-redux";

export function FavoriteTickers() {

    const favoriteTickers = useSelector(state => state.favTickers)
    const tickersState = useSelector((state) => state.tickers)



    return (
            <div className={s.wrap}>
                <div className={s.header}>
                    <span className={s.title}>FAVORITE TICKERS</span>
                </div>

                {
                    tickersState
                        .filter(ticker =>
                        favoriteTickers.some(fav => fav.ticker === ticker.ticker)
                        )
                        .map((ticker, index) => {

                            return <Ticker
                                key={index}
                                data={ticker}
                                isMainTickerList={false}
                            />
                        })}
        </div>
    )
}