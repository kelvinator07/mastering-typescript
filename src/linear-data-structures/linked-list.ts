class Node_<T> {
    data: T;
    next: Node_<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: Node_<T> | null;

    constructor() {
        this.head = null;
    }

    append(data: T): void {
        const newNode = new Node_(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    print() {
        let current = this.head;
        console.log(current?.data);
        while(current?.next) {
            const node = current.next;
            console.log(node.data);
            current = node;
        }
    }
}


// Example:
const linkedList = new LinkedList();
linkedList.append("first");
linkedList.append("second");
linkedList.append("third");
linkedList.print() // Output first, second, third
