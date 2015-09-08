class Dispatcher{

  constructor(){
      let listeners = [];
  }

  subscribeListener(listener){
      listeners.push(listener);
      return true;
  }

  unsubscribeListener(listener){
      return ( listeners.indexOf(listener) > -1 ) ? listeners.splice(listener) : null;
  }

  pushMessage(Message){ // Validation ?
    distributeMessage(Message);
  }

  distributeMessage(message){
    listeners.forEach(listener => {
      listener(message);
    })
  }

}

 export default Dispatcher;
