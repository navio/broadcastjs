class Dispatcher{

  constructor(){
      this.listeners = [];
  }

  subscribeListener(listener){
      this.listeners.push(listener);
      return listener;
  }

  unsubscribeListener(listener){
      return ( this.listeners.indexOf(listener) > -1 ) ?
                this.listeners.splice(listener) : null;
  }

  pushMessage(Message){ // Validation ?
    this.distributeMessage(Message);
  }

  distributeMessage(message){
      this.listeners.forEach(listener => {
      listener(message);
    })
  }

  _showSubscribers(){
      this.listeners.forEach(listener => {
      console.info(listener)
    })
    return this.listeners;
  }

}

 export default Dispatcher;
