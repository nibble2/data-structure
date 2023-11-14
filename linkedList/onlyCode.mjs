class Node{
  constructor(data, next = null) {
   this.data = data;
   this.next = next;   
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;

    while(currentNode != null) { // currentNode가 null이 될때까지 순회
      console.log("currentNode: ", currentNode.data);
      currentNode = currentNode.next;
    }
  }

  insertAt(index, data) {
    if(index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.")
    }

    let newNode = new Node(data);

    if(index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.count++;
  }
}

export { Node, LinkedList };

