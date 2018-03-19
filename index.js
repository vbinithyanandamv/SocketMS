var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;


io.on('connection', function(socket){
  socket.emit('id',socket.id);
  socket.on('update', function(msg){
    socket.broadcast.emit('join_response',{'data':msg})
 });
});




http.listen(port, function(){
  console.log('listening on *:' + port);
});
