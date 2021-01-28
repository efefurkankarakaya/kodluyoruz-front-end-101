class Stack{
    constructor(){
        this.pointer = -1;
        this.stack = new LinkedList()
    }

    push(x){
        ++this.pointer;
        this.stack.insert(x);
    }

    pop(){
        this.pointer--;
        return this.stack.removeLast();
    }

    getPointer(){
        return this.pointer;
    }
}