var app = require('express')();
var server = require('http').createServer(app);
app.set('view engine', 'ejs');

var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('connected!');
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });


 });
server.listen(3000, function(){
  console.log('express/socket listening')
});

app.get("/page", function(req,res){
  res.render('page');
})
