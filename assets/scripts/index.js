'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const example = require('./example.js');
const authEvents = require('./auth/events.js');
const app = require('./app.js');


// let getTweets = function(){
//   return $.ajax({
//     url: app.host + "/tweets",
//     method: 'GET',
//     dataType: 'json'
//   }).done(example.displayTweets(app.tweets));
// };


$(() => {
  authEvents.addHandlers();
});

module.exports = {
  // getTweets
};
