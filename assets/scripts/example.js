'use strict';

let displayTweets = function(tweets){
  let allTweets = require('./templates/tweet.handlebars');
    $('.timeline').append(allTweets(tweets));
};

const makeTweetData = function () {
  console.log('Maketweetdata is being called!');
  let JSONified = {
             'tweet': {
               'user_id': 1,
               'content': 'I tweetered!'
         }
       };
       console.log(JSONified);
       return JSONified;
};

module.exports = {
  displayTweets,
  makeTweetData
};
