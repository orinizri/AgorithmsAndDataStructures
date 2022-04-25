// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    this.events[eventName] ?
      this.events[eventName].push(callback) :
      this.events[eventName] = [callback];
    return this.events
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let callback of this.events[eventName]) {
        callback()
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName]
    return this.events
  }
}

const events = new Events();
console.log(events.on("click", ()=> {console.log("awesome")}))
console.log(events.on("click", ()=> {console.log("awesome2")}))
console.log(events.off("click"))

module.exports = Events;
