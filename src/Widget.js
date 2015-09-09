class Widget{

  constructor(name,dispatcher,actions){
    if(!dispatcher) throw "No Dispatcher";
    this.name = name || "Widget name";
    this.dispatcher = dispatcher;
    this.actions = actions || ["Listen","Broadcast"];
  }

  getName(){
    return this.name;
  }

  updateDispatcher(dispatch){ // Update Dispatch
      this.dispatcher = dispatch;
  }

  subscribeWidget(){
    return this.dispatcher.subscribeListener(this.callbackProvider());
  }

  callbackProvider(){
    let local = this.getName();

    return function (message,config){ // Do something with message update
              console.log("widget "+ local + " reacts on:",message);
           };
  }


  broadcastMessage(message){
    let messageObj = new Message(name,'data');
    this.dispatcher.push(message)
  }

}
 export default Widget;
