import {io} from "socket.io-client";

let socket
export const socketApi = () => {
    socket = io('http://localhost:4000');
    socket.emit('start')

    return socket;
};
