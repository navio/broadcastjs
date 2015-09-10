"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connection = function Connection() {
  _classCallCheck(this, Connection);
};

var Listener = (function () {
  function Listener(channels) {
    _classCallCheck(this, Listener);

    // Array ["Voice","Canvas","Sound"]
    var channelObj = {};
    channels.forEach(function (channel) {
      channelObj[channel] = null;
    }); // {"Voice":null,"Canvas":null,"Sound":null}
    this.channels = channelObj;
  }

  _createClass(Listener, [{
    key: "findChannel",
    value: function findChannel(channelName) {
      var channelLocation = Object.keys(this.channels).indexOf(channelName);
      return channelLocation > -1 ? channelLocation : false;
    }
  }, {
    key: "isChannelAvailable",
    value: function isChannelAvailable(channelName) {
      var chPos = this.findChannel(channelName);
      return chPos && this.channels[chPos] === null ? true : false;
    }
  }, {
    key: "connectToChannel",
    value: function connectToChannel(channelName, Fn) {
      if (isChannelAvailable(channelName)) {
        this.channels[channelName] = Fn;
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "disconnectToChannel",
    value: function disconnectToChannel(channelName) {
      if (isChannelAvailable(channelName)) {
        this.channels[channelName] = null;
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Listener;
})();

exports["default"] = Listener;
module.exports = exports["default"];