

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
    let that = this;
    let save = function(message){ that._setState(message) }
    let handler = function(message){ that.handler(message) }
    return function (message,config){ //save state and execute handler
              save(message);
              handler(message,config);
           };
  }

  handler(message){ //Default
      console.log("Widget "+ this._getName() + " listened:",message);
  }

  broadcastMessage(message){
    let messageObj = new Message(name,'data');
    this.dispatcher.push(message)
  }

}
 export default Widget;
