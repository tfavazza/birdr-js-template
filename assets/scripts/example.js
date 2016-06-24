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

let displayTweets = function(tweet){
  console.log("maybe some tweets? " + tweet);
//   let allTweets = require('./templates/tweet.handlebars');
     $('.timeline').append(tweet +"</br>");
//     $('.testtweet').append(makeTweetData().stringify);
};

module.exports = {
  displayTweets,
  makeTweetData,
  getTweetText,
};
