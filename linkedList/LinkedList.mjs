class Node {
  constructor(data, next = null) {
   this.data = data;
   this.next = next;   
  }
}


class LinkedList {
  constructor(){
    this.head = null;
    this.count = 0;
  }

  // 1. 모든 데이터가 출력 printAll();
  // 2. 모든 데이터 제거 clearAll();
  // 3. 인덱스 삽입 insertAt(index, data);
  // 4. 마지막 삽입 insertLast(data);
  // 5. 인덱스 삭제 deleteAt(index);
  // 6. 마지막 삭제 deleteLast();
  // 7. 인덱스 읽기 getNodeAt(index);


  // 모든 데이터 출력
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while(currentNode != null) { // currentNode가 null이 될때까지 순회
      text += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode != null) {
       text += ", ";
      }
    }
    text += "]";
    console.log(text)
  }

  clear() {
    this.head = null;
    this.count = 0; 
  }


  insertAt(index, data) {
    // index가 현재 연결 리스트 범위보다 큰 경우
    // index를 음수에 삽입하려고 하는 경우
    if(index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.")
    }

    // 상황1. 리스트의 가장 앞 부분에 삽입하는 경우
    // 상황2. 가장 앞부분을 제외한 나머지 부분에 삽입하는 경우
    let newNode = new Node(data);

    // 리스트의 가장 앞 부분에 삽입하는 경우
    if(index === 0) {
      // 새로 생성한 노드를 head로 변경 ex) newNode => node1
      newNode.next = this.head;
      // head를 새로 생성한 노드로 변경
      this.head = newNode;
    } else {
      let currentNode = this.head; // head에서 시작
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next; // 목표 인덱스 전까지 접근
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.count++;
  }

  insertLast(data){
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if(index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    if(index === 0) {
      let deleteNode = this.head
      this.head = this.head.next;
      this.count--;
      return deleteNode;
    } else {
      for(let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deleteNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if(index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    for(let i = 0; i < index; i ++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, LinkedList };