var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/test.html'));
});

io.on('connection', function(socket){
  socket.emit('id',socket.id);
  socket.on('update', function(msg){
    socket.broadcast.emit('join_response',{'data':msg})
 });
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



http.listen(port, function(){
  console.log('listening on *:' + port);
});
