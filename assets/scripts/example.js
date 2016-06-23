'use strict';

const app = require('./app.js');
let content = '';
const getTweetText = function(){
 content = $('#input-custom-size').val();
};

let displayTweets = function(tweets){
  let allTweets = require('./templates/tweet.handlebars');
    $('.timeline').append(allTweets(tweets));
};

const makeTweetData = function () {
  console.log('Maketweetdata is being called!');
  let JSONified = {
             'tweet': {
               'user_id': app.user.id,
               'content': content
         }
       };
       console.log(JSONified);
       return JSONified;
};

module.exports = {
  displayTweets,
  makeTweetData,
  getTweetText,
};
