const express= require('express');
const request=require('request');
const apiKey="dc2a20cb9f3f45edbe760729191104";
const app=express();
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  //let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  let url= `http://snapchat.api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`;
  request(url, function (err, response, body) {
    if(err){
      res.render('index', {account: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {account: null, error: 'Error underfined, please try again'});
      } else {
        //let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {account: weatherText, error: null});
      }
    }
  });
});

app.listen(3000, '192.168.2.32',function () {
  console.log('Example app listening on port 3000!')
});
