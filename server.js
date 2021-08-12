
//This is a way of importing the module that I am using
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

//This is the function that is triggered when there is a new socket connection
function newConnection(socket){
    console.log('new connection: ' + socket.id);

    //If there is a message called mouse, trigger this function
    
    socket.on('move', movement);

    socket.on('gameState', player1Info);
  
    socket.on('charSelect', selectChar);
  
    socket.on('finMap', createFinalMap);
  
    socket.on('char1Location', showChar1);
  
    socket.on('attackingData', showLives)

  
    // socket.on('mapSelect', selectMap);

    //socket.on('startOver', resetMsg);


    //When the mouse message comes in, I want to call the broadcast.emit function to send the same exact message back out.
    //A message that comes in can be 

    function movement(data){
        socket.broadcast.emit('move', data);
        console.log(data);
    }
  
    function player1Info(data){
        socket.broadcast.emit('gameState', data);
        console.log(data);
    }

    function createFinalMap(data){
      socket.broadcast.emit('finMap', data);
      console.log(data);
    }
  
    function selectChar(data){
      socket.broadcast.emit('charSelect', data);
      console.log(data);
    }
  
  // when receiving message, perform function
  
  // with received data, function shit
  function showChar1(locationData){
    socket.broadcast.emit('char1Location', locationData);
    console.log(locationData);
  }
  
  function showLives(data){
    socket.broadcast.emit('attackingData', data);
    console.log(data);
  }
  
  
  
//     function selectMap(data5){
//       socket.broadcast.emit('mapSelect', data5);
//       console.log(data5);
//     }
  
    // function resetMsg(data2){
    //     socket.broadcast.emit('startOver', data2);
    //     console.log(data2);

    // }
}