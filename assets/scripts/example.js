'use strict';

const app = require('./app.js');
let content = '';
const getTweetText = function(){
 content = $('#input-custom-size').val();
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

let displayUser = function(tweet) {
  $('.timeline').append("here is that user: " + tweet +"</br>");

};

 let displayTweets = function(tweet){
   console.log("what's going to displayTweets? " + tweet);
//    let allTweets = require('./templates/alltweets.handlebars');
//  //$('.timeline').append(allTweets(tweet));
    $('.timeline').append("here is a username: " + tweet +"</br>");
  };


    let collectTweetData = function(tweetArray) {
      for(let i = tweetArray.length-1; i > -1; i--) {
        //contentArray[i] = tweetArray[i].content;
        displayUser(tweetArray[i].user.email);
        displayTweets(tweetArray[i].content);
        //displayTweets(tweetArray[i].content);
      }
    };

module.exports = {
  displayTweets,
  makeTweetData,
  getTweetText,
  collectTweetData,
};
