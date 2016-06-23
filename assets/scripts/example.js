'use strict';

let displayTweets = function(tweets){
  let allTweets = require('./templates/tweet.handlebars');
    $('.content').append(allTweets(tweets));
};

module.exports = {
  displayTweets
};
