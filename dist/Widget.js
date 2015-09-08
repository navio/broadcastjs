"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widget = (function () {
  function Widget() {
    _classCallCheck(this, Widget);

    var name = "WidgetName";
    var actions = ["Listen", "Broadcast"];
    var dispatcher = null;
  }

  _createClass(Widget, [{
    key: "setDispatcher",
    value: function setDispatcher(dispatch) {
      // Set Dispatch
      this.dispatcher = dispatch;
    }
  }, {
    key: "subscribeWidget",
    value: function subscribeWidget() {
      // Submit Call Back To Listener
      return this.dispatcher.subscribeListener(this.upcomingState);
    }
  }, {
    key: "upcomingMessage",
    value: function upcomingMessage(message, config) {
      // Do something with message update
      console.log("newState", message);
    }
  }, {
    key: "broadcastMessage",
    value: function broadcastMessage(message) {
      var messageObj = new Message(name, 'data');
      this.dispatcher.push(message);
    }
  }]);

  return Widget;
})();

exports["default"] = Widget;
module.exports = exports["default"];