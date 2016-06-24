'use strict';

const app = require('../app.js');
const example = require('../example.js');




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

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  $('.emoji-list').show();
  $('.greeting').append("🖐 " + app.user.email + "❗");
  // $('.tweets').append(index.getTweets);
  $('.modal').modal('hide') ;
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('.emoji-list, .tweets, .greeting').hide();
  $('.modal').modal('show') ;
};

const getTimeLineSuccess = (data) => {
  console.log("get timelinesuccess " + data.tweets);
  let tweetArray = data.tweets;
  console.log("get some tweet content? " + tweetArray[1].content);
  for(let i=0; i<tweetArray.length; i++) {
    example.displayTweets(tweetArray[i].content);
  }
  console.log("showing how many tweets exist " + tweetArray.length);
};


module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  getTimeLineSuccess
};
