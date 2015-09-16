// Listener Registration
class Listener {
  constructor(channels){ // Array ["Voice","Canvas","Sound"]
      let channelObj = { global:null };
      if(channels) channels.forEach(channel => { channelObj[channel] = null; })
      // {"Voice":null,"Canvas":null,"Sound":null}
      this.channels = channelObj;
  }

  findChannel(channelName){
    let channelLocation = Object.keys(this.channels).indexOf(channelName);
    return ( channelLocation > -1 ) ? true : false;
  }

  isChannelAvailable(channelName){
    let chPos = this.findChannel(channelName);
    return (chPos && this.channels[chPos] === null ) ? true : false;
  }

  connectToChannel(channelName,Fn){
    if (!this.findChannel(channelName)) return this.addChannel(channelName,Fn);
    if (this.isChannelAvailable(channelName)){
      this.channels[channelName] = Fn;
      return true;
    }else{
      return false;
    }
  }

  disconnectToChannel(channelName){
    if (this.isChannelAvailable(channelName)){
      this.channels[channelName] = null;
      return true;
    }else{
      return false;
    }
  }

  getChannels(){
    return this.channels;
  }

  getChannel(channel){
    return this.channels[channel];
  }

  addChannel(name,fn){
      this.channels[name] = fn;
      return true;
  }

}

export default Listener;
