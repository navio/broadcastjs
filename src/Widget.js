class Widget{

  constructor(){
    let name = "WidgetName";
    let actions = ["Listen","Broadcast"];
    let dispatcher = null;
  }

  setDispatcher(dispatch){ // Set Dispatch
      this.dispatcher = dispatch;
  }

  subscribeWidget(){ // Submit Call Back To Listener
    return this.dispatcher.subscribeListener(this.upcomingState);
  }

  upcomingMessage(message,config){ // Do something with message update
    console.log("newState",message);
  }

  broadcastMessage(message){
    let messageObj = new Message(name,'data');
    this.dispatcher.push(message)
  }

}
 export default Widget;
