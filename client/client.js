const io=require('socket.io-client');
const socket=io('http://localhost:3000');
socket.on('connect',()=>{
    console.log('connected to server');
    socket.emit('predefienedreq',{request:'this is a predefined request'});
});
socket.on('automaticres',(data)=>{
    console.log(data);
});
socket.on('disconnect',()=>{
    console.log('disconnected from server');
})