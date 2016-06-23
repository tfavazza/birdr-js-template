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

const sendATweet = (data) => {
  console.log("sendATweet is being called!");
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

const getTimeLine = () => {
  console.log("getTimeLine is being called!");
  return $.ajax({
    url: app.host + '/tweets',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
  };

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  sendATweet,
  getTimeLine,
};
