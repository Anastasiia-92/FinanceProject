import React from "react";
import s from "./TickersTable.module.scss";
import {Ticker} from "../ticker/Ticker";
import {useSelector} from "react-redux";
import {FavoriteTickers} from "../favoriteTickers/favoriteTickers";

export function TickersTable({tickers}) {

    const favoriteTickers = useSelector(state => state.favTickers)

    return (
        <div>
            <div className={s.wrap}>
                {
                    tickers.map((ticker, index) => {
                        return <Ticker
                            key={index}
                            data={ticker}
                            isMainTickerList={true}
                        />
                    })}
            </div>
            {favoriteTickers.length > 0 && <FavoriteTickers />}
        </div>
    )
}