'use strict';

const app = require('../app.js');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: "POST",
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const postATweet = (data) => {
  console.log("postATweet is being called!");
  return $.ajax({
    url: app.host + '/tweets',
    method: "POST",
    dataType: 'json',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

const getTimelineTweets = () => {
  console.log("getTimelineTweets is being called!");
  return $.ajax({
    url: app.host + '/tweets/',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
  };

  const getMyTweets = () => {
    console.log("getMyTweets is being called!");
    return $.ajax({
      url: app.host + '/users/' + app.user.id,
        method: 'GET',
        headers: {
          Authorization: 'Token token=' +app.user.token,
        },
    });
  };

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  postATweet,
  getTimelineTweets,
  getMyTweets,
};
