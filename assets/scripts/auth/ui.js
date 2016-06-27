'use strict';

const app = require('../app.js');
const api = require('./api.js');
//const example = require('../example.js');

const anySuccess = () => {
  $('.error').hide();
};

const success = (data) => {
  anySuccess();
  if (data) {
    //console.log(data);
  } else {
    //console.log('Success');
  }
};

const failure = (error) => {
  $('.error').show();
  $('.error').text("I'm sorry, something went wrong.");
  console.error(error);
};

const showTweetSuccess = (data) => {
  anySuccess();
  $('.tweets').text('');
  app.user = data.user;
  //console.log("app.user is " + app.user);
  let tweets = app.user.tweets;
  //console.log(tweets);
  for(let i=tweets.length-1; i>-1; i--) {
  // $('.tweets').append(app.user.email + ": " + app.user.tweets[i].content + '<br>');
  let allTweets = require('../templates/tweet.handlebars');
  $('.tweets').append(allTweets(app.user.tweets[i]));
}
};

const showMyTweetsSuccess = (data) => {
  anySuccess();
  $('.tweets').text('');
  //console.log(data);
  let tweets = data.user.tweets;
  //console.log(tweets);
  for(let i=tweets.length-1; i>-1; i--) {
  let allTweets = require('../templates/tweet.handlebars');
  $('.tweets').append(allTweets(data.user.tweets[i]));
  $('#my-profile').hide();
  $('#timeline').show();
}
};

const signInSuccess = (data) => {
  anySuccess();
  $('.greeting').text(' ');
  showTweetSuccess(data);
  app.user = data.user;
  //console.log(app.user);
  $('.emoji-list, #sign-out, .tweets, .greeting, .tweetbox, #hide-all-buttons, #timeline').show();
  $('#my-profile').hide();
  $('.greeting').text("🖐 " + app.user.email + "❗");
  $('.modal').modal('hide');
};

const signUpSuccess = () => {
  anySuccess();
  $('#signin-email').val($('#signup-email').val());
  $('#signin-password').val($('#signup-password').val());
  $('#sign-in').submit();
  $('#signin-email, #signup-email, #signin-password, #signup-password, signup_passwordconf').val('');
};

const sendTweetSuccess = (data)  => {
  anySuccess();
  //console.log(data);
  //console.log("sendtweetsuccess data tweet is" + data.tweet.content);
  let allTweets = require('../templates/tweet.handlebars');
  $('.tweets').prepend(allTweets(data.tweet));
  $('#input-custom-size').val('');
};


const signOutSuccess = () => {
  anySuccess();
  //console.log('User signed out successfully');
  app.user = null;
  $('.emoji-list, .tweets, .greeting, #sign-out, .tweetbox, #hide-all-buttons').hide();
  $('.emoji-list, .tweets, .greeting').text('');
  $('.modal,').modal('show');
};

const showTimelineTweetsSucccess = (data) => {
  anySuccess();
  app.tweets = data.tweets;
  $('.tweets').text(' ');
  for(let i=app.tweets.length-1; i>-1; i--) {
  // $('.tweets').append(app.user.email + ": " + app.user.tweets[i].content + '<br>');
  let allTweets = require('../templates/tweet.handlebars');
  $('.tweets').append(allTweets(app.tweets[i]));
  $('#my-profile').show();
  $('#timeline').hide();
}
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
  showTweetSuccess,
  sendTweetSuccess,
  showTimelineTweetsSucccess,
  signUpSuccess,
  showMyTweetsSuccess,
  //getUsersTweetsSuccess
};
