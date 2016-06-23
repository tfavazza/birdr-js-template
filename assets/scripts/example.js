'use strict';

let displayTweets = function(tweets){
  let allTweets = require('./templates/tweet.handlebars');
    $('.timeline').append(allTweets(tweets));
};

const makeTweetData = function () {
  let JSONified = {
             'tweet': {
               'user_id': 1,
               'content': 'I tweetered!'
         }
       };
       return JSONified;
};


module.exports = {
  displayTweets,
  makeTweetData
};
