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
        console.log(this.stack.getCount() - 1)
        return this.stack.removeLast();
    }

    getPointer(){
        return this.pointer;
    }
}