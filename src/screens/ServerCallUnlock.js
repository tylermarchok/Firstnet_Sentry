//var express=require('express');
//var app=express();
//var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
//var LED = new Gpio(4, 'out');
//
//app.get('/api/dooropen',function(req,res)
//{
//    console.log('bitch.')
//    unlock door
//    if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
//        LED.writeSync(1); //set pin state to 1 (turn LED on)
//    }
//    else {
//        LED.writeSync(0); //set pin state to 0 (turn LED off)
//    }
//
//});
//var server=app.listen(8080,function() {});
//console.log('bitch.')
//

HEROKU_API_TOKEN = ''
const Heroku = require('heroku-client')
//const heroku = new Heroku({ token: HEROKU_API_TOKEN })
const heroku = Heroku('http://firstnethackathon.herokuapp.com/')
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out');

heroku.get('/api/dooropen',function(req,res)
{
    console.log('bitch.')
    if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
        LED.writeSync(1); //set pin state to 1 (turn LED on)
    }
    else {
        LED.writeSync(0); //set pin state to 0 (turn LED off)
    }

});
//var server=app.listen(8080,function() {});
console.log('bitch.')




