




// Solution
// Create Node class constructor
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }


function stringify(list) {
    list.forEach(item => console.log(item))
}

stringify(new Node(1, new Node(2, new Node(3))))