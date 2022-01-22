"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageTime = exports.addGetLocalstorage = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var handleMessageTime = function handleMessageTime(timestamp) {
  timestamp = (Date.now() - timestamp) / 1000;
  var minutes = Math.floor(timestamp / 60);

  if (!minutes) {
    if (!Math.floor(timestamp)) {
      return "Just Now";
    }

    return "".concat(Math.floor(timestamp), " seconds ago");
  }

  if (minutes < 60) {
    return "".concat(minutes, " minutes ago");
  }

  var hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return "".concat(hours, " hours ago");
  }

  var days = Math.floor(hours / 24);
  return "".concat(days, " days ago");
};

exports.handleMessageTime = handleMessageTime;

var addGetLocalstorage = function addGetLocalstorage(key, value, action) {
  if (action === "ADD") {
    if (_typeof(value) === "object") {
      value = JSON.stringify(value);
    }

    window.localStorage.setItem(key, value);
  }

  var result = window.localStorage.getItem(key);

  try {
    result = JSON.parse(result);
  } catch (e) {}

  return result;
};

exports.addGetLocalstorage = addGetLocalstorage;

//# sourceMappingURL=helpers.js.map