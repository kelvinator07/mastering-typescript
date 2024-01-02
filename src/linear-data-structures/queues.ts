// FIFO - First in first out 
class Queue<T> {
    private items: T[] = [];

    enqueue(element: T): void {
        this.items.push(element);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    front(): T | undefined {
        return this.items[0];
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

}

// Example
const queue = new Queue<string>();
queue.enqueue("James");
queue.enqueue("John");
queue.enqueue("Jane");

console.log(queue.dequeue()); // Output James
console.log(queue.front()); // Output John
console.log(queue.isEmpty()); // Output false
console.log(queue.size()); // Output 2

