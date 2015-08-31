var express = require('express');
var app = express();

(function() {
  function Player(name) {
    this.name = name;
  }

  //var country = "Australia";

  //Animal.prototype.getDesc = function() {
  //  return this.name + ' ' + this.colour + ' ' + country;
  //};
})();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello main GET');
})


// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a GET request for the /list_user page.
app.get('/endpoint', function (req, res) {
   console.log("Got a GET request for /endpoint");
  
  var responseText;
  $responseText = "Query String is:" + JSON.stringify(req.query);
  
   //Details
   var token = req.query.token;
   
   var timestamp = new Date().getDate();
   $responseText += "\n Time is: "+timestamp;
   
   //About the player
   if(req.query.user_name)
   {
    var Player = new require("./player.js");
    var player = new Player(req.query.user_name);
    //$player.user_id = req.query.user_id;
    //$player.player_text = req.query.text;
    //$player.channel = req.query.channel_name;
    //$player.last_seen = timestamp;
   }
   
   if(req.query.player_text!="")
      {
      var command = req.query.player_text.split(" ");
      if(command[0]=="!trivia")
      {
        $responseText += "\nCommand IS a !trivia command!";
        switch(command[1])
        {
          case "start":
            break;
          case "stop":
            break;
          case "delay":
            break;
          case "questions":
            break;
          case "seen":
            break;
          case "scores":
            break;
          case "runs":
            break;
          case "answers":
            break;
          case "me":
            break;
          case "help":
            break; 
        }       
      }
      else
      {
        $responseText += "\nCommand not a !trivia command!";
        
        //But may be an answer
        
      }
   };

    res.send($responseText);
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
