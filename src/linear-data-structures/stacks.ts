// LIFO - Last in first out
class Stack<T> {
    items: T[] = [];

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | any {
        return this.items.pop();
    }
}

// Example
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output 3
