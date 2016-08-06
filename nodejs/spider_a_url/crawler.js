#! /usr/bin/env node

const request = require('request');

var crawler = function(){
  request('http://localhost:3000/price', function(error, response, body){
    if(!error && response.statusCode == 200){
      console.log(body); // show the HTML for the test page
    }
  })
}

setInterval(crawler, 1000);
