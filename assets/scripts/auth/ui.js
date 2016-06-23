'use strict';

const app = require('../app.js');
const index = require('../index.js');



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
  $('.tweets').append(index.getTweets).show();
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('.emoji-list, .tweets, .greeting').hide();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};