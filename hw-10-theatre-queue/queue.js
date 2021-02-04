class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue = (x) => {
        if (this.front == null){
            this.front = new Node(x, null);
            this.rear = this.front;
            return;
        }
        this.rear.next = new Node(x, null);
        this.rear = this.rear.next;
    }

    dequeue = () => {
        if (this.front == null) return -1;
        const value = this.front.data;
        let temp = this.front;
        this.front = this.front.next;
        temp = null;
        return value;
    }
}