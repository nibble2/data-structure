class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // 모든 데이터 출력
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while(currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode != null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }

  // 모든 데이터 제거
  clearAll() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // 인덱스에 데이터 삽입
  insertAt(index, data) {
    if (index < 0 || index > this.count) {
      throw new Error("범위를 벗어났습니다.");
    }

    const newNode = new Node(data);
    // 리스트의 앞에 삽입
    if (index === 0) { 
      if (this.head === null) { // 리스트가 비어있는 경우
        this.head = newNode;
        this.tail = newNode;
      } else {
        const originalFirstNode = this.head; // 새 노드 삽입 전의 첫 번째 노드
        newNode.next = originalFirstNode;
        originalFirstNode.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.count) { // 리스트의 뒤에 삽입
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else { // 중간에 삽입
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      newNode.prev = currentNode.prev;
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
    }
    this.count++;
  }

  // 리스트의 끝에 데이터 삽입
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  // 인덱스의 데이터 삭제
  deleteAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("범위를 벗어났습니다.");
    }

    let deletedNode;
    if (index === 0) { // 리스트의 첫 번째 노드 삭제
      deletedNode = this.head;
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.count - 1) { // 리스트의 마지막 노드 삭제
      deletedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else { // 중간 노드 삭제
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      deletedNode = currentNode;
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
    this.count--;
    return deletedNode.data;
  }

  // 리스트의 마지막 데이터 삭제
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  // 인덱스의 노드 가져오기
  getNodeAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("범위를 벗어났습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }
}

export {Node, DoublyLinkedList }