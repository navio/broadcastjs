'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Listener = require('./Listener');

var _Listener2 = _interopRequireDefault(_Listener);

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this.listeners = [];
    this.emiter = new _Listener2['default']();
  }

  _createClass(Dispatcher, [{
    key: 'getEmitter',
    value: function getEmitter() {
      return this.emiter;
    }
  }, {
    key: 'subscribeListener',
    value: function subscribeListener(listener) {
      this.listeners.push(listener);
      return listener;
    }
  }, {
    key: 'unsubscribeListener',
    value: function unsubscribeListener(listener) {
      return this.listeners.indexOf(listener) > -1 ? this.listeners.splice(listener, 1) : null;
    }
  }, {
    key: 'pushMessage',
    value: function pushMessage(Message) {
      // Validation ?
      this.distributeMessage(Message);
    }
  }, {
    key: 'distributeMessage',
    value: function distributeMessage(message) {
      this.listeners.forEach(function (listener) {
        listener(message);
      });
    }
  }, {
    key: '_showSubscribers',
    value: function _showSubscribers() {
      this.listeners.forEach(function (listener) {
        console.info(listener);
      });
      return this.listeners;
    }
  }]);

  return Dispatcher;
})();

exports['default'] = Dispatcher;
module.exports = exports['default'];