import { Node, DoublyLinkedList } from './DoublyLinkedList.mjs';

let list = new DoublyLinkedList();

console.log("======== insertAt() 다섯 번 호출 ========");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);

list.printAll();