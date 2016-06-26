'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const example = require('../example');
//const index = require('../index.js');


const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onShowTimelineTweets = (event) => {
  console.log("onShowTimelineTweets is being called!");
  event.preventDefault();
  api.getTimelineTweets()
  .done(ui.showTimelineTweetsSucccess)
  .fail(ui.failure);
  //$('.content').show();
};

const onShowMyTweets = (event) => {
  console.log("onShowMyTweets is being called!");
  event.preventDefault();
  api.getMyTweets()
  .done(ui.showMyTweetsSuccess)
  .fail(ui.failure);
};

const onSendTweet = (event) => {
  event.preventDefault();
  let data = example.makeTweetData();
  api.postATweet(data)
  .done(ui.showTweetSuccess)
  .fail(ui.failure);
};

const onTweetTextEntered = () =>
 {
   if($('#input-custom-size').val().length > 27) {
     console.log("too big!");
   }
 };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#send-tweets').on('submit', example.getTweetText);
  $('#timeline').on('submit', onShowTimelineTweets);
  $('#send-tweets').on('submit', onSendTweet);
  $('#input-custom-size').on('focus', onTweetTextEntered);
  $('#my-profile').on('submit', onShowMyTweets);
};
//
module.exports = {
  addHandlers,
};
