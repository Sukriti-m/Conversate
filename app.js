const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const app=express();
const server=http.createServer(app);
const io=socketio(server);
app.use(express.static('public'));

server.listen(3000||process.env.port, ()=>console.log('Server running successfully'));