var assert = require("assert");
var dispatch = require("../dist/Dispatcher");
var Widget = require("../dist/Widget");

describe("Dispatcher",function(){
  describe("Register Widgets", function(){
      var dispatcher = new dispatch();
      dispatcher.subscribeListener("Element1");
      dispatcher.subscribeListener("Element2");
      dispatcher.subscribeListener("Element3");
      it('should attach listeners to the subscriber list', function () {
        assert.equal(3, dispatcher._showSubscribers().length );
      });

      it('should remove listeners on request', function () {
        dispatcher.unsubscribeListener("Element1");
        assert.equal(2, dispatcher._showSubscribers().length );
      });
  });
});

describe("Widgets",function(){
  describe("Subscription and Broadcast", function(){
      var dispatcher = new dispatch();
      var widget1 = new Widget("one",dispatcher);
      it('Widget should subscribe to Broadcaster', function () {
        widget1.subscribeWidget();
        assert.equal(1, dispatcher._showSubscribers().length );
      });

      it('Widget should provide its widget Name', function () {
        assert.equal("one", widget1._getName());
      });

      it('Widget should receive Broadcast Mesasge', function () {
        dispatcher.pushMessage("Hello");
        assert.equal("Hello", widget1._getState());
      });

  });
});
