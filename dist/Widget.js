"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widget = (function () {
  function Widget(name, dispatcher, actions) {
    _classCallCheck(this, Widget);

    if (!dispatcher) throw "No Dispatcher";
    this.name = name || "Widget name";
    this.dispatcher = dispatcher;
    this.actions = actions || ["Listen", "Broadcast"];
    this.currentState = null;
  }

  _createClass(Widget, [{
    key: "_getName",
    value: function _getName() {
      return this.name;
    }
  }, {
    key: "_setState",
    value: function _setState(message) {
      this.currentState = message;
    }
  }, {
    key: "_getState",
    value: function _getState() {
      return this.currentState;
    }
  }, {
    key: "updateDispatcher",
    value: function updateDispatcher(dispatch) {
      // Update Dispatch
      this.dispatcher = dispatch;
    }
  }, {
    key: "subscribeWidget",
    value: function subscribeWidget() {
      return this.dispatcher.subscribeListener(this.callbackProvider());
    }
  }, {
    key: "callbackProvider",
    value: function callbackProvider() {
      var that = this;
      var save = function save(message) {
        that._setState(message);
      };
      var handler = function handler(message) {
        that.handler(message);
      };
      return function (message, config) {
        //save state and execute handler
        save(message);
        handler(message, config);
      };
    }
  }, {
    key: "handler",
    value: function handler(message) {
      //Default
      console.log("Widget " + this._getName() + " listened:", message);
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