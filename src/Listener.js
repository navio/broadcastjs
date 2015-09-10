class Connection{

}

class Listener {
  constructor(channels){ // Array ["Voice","Canvas","Sound"]
      let channelObj = {};
      channels.forEach(channel => {
        channelObj[channel] = null;
      }); // {"Voice":null,"Canvas":null,"Sound":null}
      this.channels = channelObj;
  }

  findChannel(channelName){
    let channelLocation = Object.keys(this.channels).indexOf(channelName);
    return ( channelLocation > -1 )? channelLocation : false;
  }

  isChannelAvailable(channelName){
    let chPos = this.findChannel(channelName);
    return (chPos && this.channels[chPos] === null ) ? true : false;
  }

  connectToChannel(channelName,Fn){
    if (isChannelAvailable(channelName)){
      this.channels[channelName] = Fn;
      return true;
    }else{
      return false;
    }
  }

  disconnectToChannel(channelName){
    if (isChannelAvailable(channelName)){
      this.channels[channelName] = null;
      return true;
    }else{
      return false;
    }
  }

}

export default Listener;
