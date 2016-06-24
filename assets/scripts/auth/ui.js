'use strict';

const app = require('../app.js');
//const example = require('../example.js');




const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const showTweetSuccess = (data) => {
  app.user = data.user;
  let tweets = app.user.tweets;
  console.log(tweets);
  for(let i=tweets.length-1; i>-1; i--) {
  // $('.tweets').append(app.user.email + ": " + app.user.tweets[i].content + '<br>');
  let allTweets = require('../templates/tweet.handlebars');

  $('.tweets').append(allTweets(app.user.tweets[i]));
}
};


const signInSuccess = (data) => {
  showTweetSuccess(data);
  app.user = data.user;
  console.log(app.user);
  $('.emoji-list').show();
  $('.greeting').append("🖐 " + app.user.email + "❗");
  $('.modal').modal('hide') ;
};



const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('.emoji-list, .tweets, .greeting').hide();
  $('.modal').modal('show');
};

// const getUsersTweetsSuccess = (data) => {
//
// };


/*
console.log("get timelinesuccess " + data.tweets);
let tweetArray = data;
console.log(tweetArray);
console.log("trying to get email " + tweetArray.user);
example.collectTweetData(tweetArray);
//let contentArray = [];
//for(let i = tweetArray.length-1; i > -1; i--) {
  //contentArray[i] = tweetArray[i].content;
  //example.displayTweets(tweetArray[i].content);
//}
//console.log("showing how many tweets exist " + tweetArray.length);

*/

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  showTweetSuccess
  //getUsersTweetsSuccess
};
