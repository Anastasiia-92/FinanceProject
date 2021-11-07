import './App.module.css';
import React, {useEffect, useState} from "react";
import {socketApi} from "./api/socket-api";
import {setTickersTC} from "./state/tickers-reducer";
import {useDispatch, useSelector} from "react-redux";
import {TickersTable} from "./components/tickersTable/TickersTable";
import s from "./App.module.css";


function App() {

    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = useState(false)
    const tickersState = useSelector((state) => state.tickers)

    useEffect(() => {
        setIsLoad(true)

        const socket = socketApi();
        socket.on('ticker', data => {
            dispatch(setTickersTC(data));
            setIsLoad(false)
        })

        return () => socket.emit('disconnect')
    }, [dispatch])

    return <div className={s.App}>
        {isLoad
            ? <div>Loading</div>
            :
            <TickersTable tickers={tickersState}/>

        }
    </div>
}

export default App;
