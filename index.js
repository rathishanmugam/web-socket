const app = require('express')();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/',function (req,res) {
  res.sendFile(__dirname + '/index.html');
})
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


app.listen(3000,function () {
    console.log('app listening on 3000');
})
