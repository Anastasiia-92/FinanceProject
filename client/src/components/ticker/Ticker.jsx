import React from "react";
import s from "./Ticker.module.scss"
import {Button} from "../button/Button";


export function Ticker({data, isMainTickerList}) {

    const {ticker, price, change, change_percent, isProfit} = data
    const buttonForMainList = isMainTickerList


    let classNameForChange = isProfit ? `${s.tickerElem} ${s.tickerProfPrice}` : `${s.tickerElem} ${s.tickerLossPrice}`
    let classNameForPercent = isProfit ? `${s.tickerElem} ${s.tickerProfPercent}` : `${s.tickerElem} ${s.tickerLossPercent}`

    const tickerName = (ticker) => {
        switch (ticker) {
            case "AAPL":
                return "Apple";
            case "GOOGL":
                return "Alphabet";
            case "MSFT":
                return "Microsoft";
            case "AMZN":
                return "Amazon";
            case "FB":
                return "Facebook";
            case "TSLA":
                return "Tesla";
            default:
                return ''
        }
    }

    return (
        <div className={s.wrap}>
            <div className={s.tickerIconWrap}>
                <span className={s.tickerIcon}>{ticker}</span>
            </div>
            <span className={s.tickerName}>{tickerName(ticker)}</span>
            <span className={s.tickerElem}>{`${price} $`}</span>
            <span
                className={classNameForChange}>
                {isProfit ? `+${change} $` : `-${change} $`}
            </span>
            <div className={s.PercentBlock}>
                <span className={classNameForPercent}>{`${change_percent} %`}</span>
            </div>

            <Button
                ticker={data}
                isMainList={buttonForMainList}
            />

        </div>
    )
}