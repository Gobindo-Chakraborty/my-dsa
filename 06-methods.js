class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    // push an item -> End
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    // get the value for Index
    return this.data[index];
  }

  pop() {
    // delete an item -> End
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    // delete an item -> Start
    const item = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  delete(index) {
    // delete an item -> index
    const indexItem = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return indexItem;
  }
}

const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");

// console.log("push : " + myNewArray.push());
// console.log("get : " + myNewArray.get());
// console.log("pop : " + myNewArray.pop());
// console.log("shift : " + myNewArray.shift());
console.log("delete : " + myNewArray.delete(1));
console.log(myNewArray);
