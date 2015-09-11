

class Widget{

  constructor(name,dispatcher,actions){
    if(!dispatcher) throw "No Dispatcher";
    this.name = name || "Widget name";
    this.dispatcher = dispatcher;
    this.actions = actions || ["Listen","Broadcast"];
    this.currentState = null;
  }

  _getName(){
    return this.name;
  }

  _setState(message){
    this.currentState = message;
  }

  _getState(){
    return this.currentState;
  }

  updateDispatcher(dispatch){ // Update Dispatch
      this.dispatcher = dispatch;
  }

  subscribeWidget(){
    return this.dispatcher.subscribeListener(this.callbackProvider());
  }

  callbackProvider(){
    let widgetName = this._getName();
    let that = this;
    let save = function(message){ that._setState(message) }
    return function (message,config){ // Do something with message update
              save(message);
              console.log("widget "+ widgetName + " reacts on:",message);
           };
  }

  broadcastMessage(message){
    let messageObj = new Message(name,'data');
    this.dispatcher.push(message)
  }

}
 export default Widget;
