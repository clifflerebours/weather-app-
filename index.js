const request = require('request');
const argv=require('yargs').argv;

let apiKey= "dc2a20cb9f3f45edbe760729191104";

let cityName= argv.c || 'Paris';

let url= "http://api.apixu.com/v1/current.json?key=dc2a20cb9f3f45edbe760729191104&q=Miami";

request(url, function (err, response, body){
  if(err){
    console.log('error:',err);
    }
    else {
      let weather = JSON.parse(body)
      //let message = `It/'s ${weather.main.pressure} degrees in ${weather.name}!`;
      console.log(weather);
    }
    console.log(cityName);
});
