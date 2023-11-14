import { DoublyLinkedList } from "../linkedList/DoublyLinkedList.mjs";

class Queue {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    // 데이터 추가
    enqueue(data) {
        this.list.insertAt(0, data);
    }

    // 데이터 삭제
    dequeue() {
        try {
            return this.list.deleteLast();
        } catch (e) {
            return null;
        }
    }

    // 데이터 참조
    front() {
        return this.list.tail;
    }

    // 비었는지 확인
    isEmpty() {
        return (this.list.count === 0);
    }
}

export { Queue };