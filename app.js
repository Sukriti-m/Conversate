const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const formatMessage=require("./utils/message");
const app=express();
const server=http.createServer(app);
const io=socketio(server);
app.use(express.static('public'));

const name='Conversate Server';

io.on('connection', (socket) =>{
console.log("WS conn");
    socket.emit('message', formatMessage(name,'Welcome to Conversate'));

    socket.broadcast.emit('message',formatMessage(name,'A user has entered the chat'));

    socket.on('disconnect',()=>{io.emit('message',formatMessage(name,'A user left the chat'));})

    socket.on('chatMessage',(msg)=>{
        console.log(msg);
        io.emit('message',formatMessage(name,msg));
    });

});
server.listen(process.env.port || 3000, ()=>console.log('Server running successfully'));