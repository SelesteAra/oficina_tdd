class Queue {
  elements
  constructor(){
    this.elements = []
  }

  size() {
    return this.elements.length;
  }

  add(item) {
    this.elements.push(item);
  }

  peek() {
    if (this.elements.length === 0) {
      return undefined;
    }
    return this.elements[0];
  }

  dequeue() {
    if (this.elements.length === 0) {
      return undefined;
    }
    return this.elements.shift();
  }
  
 
}

module.exports = Queue