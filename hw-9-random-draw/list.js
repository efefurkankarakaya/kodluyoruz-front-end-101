class LinkedList{
    constructor(){
        this.root = null;
        this.count = 0;
    }

    display = () => {
        console.group("[display]")
        this.temp = this.root;
        while (this.temp != null){
            console.log(this.temp.data);
            this.temp = this.temp.next;
        }
        console.groupEnd("[display]");
    }

    insert = (x) => {
        if (this.root == null) {
            this.root = new Node(x, null, null);
            this.incrCount();
            return
        }
        this.temp = this.root;
        while (this.temp.next != null){
            this.temp = this.temp.next;
        }
        this.temp.next = new Node(x, null, this.temp);
        this.incrCount();
    }

    remove = (dx) => {
        if (dx >= this.getCount()) return;
        this.temp = this.root;
        this.c = 0;

        if (dx == 0 && dx == this.c){
            return this.removeHead();
        }

        while (this.temp.next != null && this.c < dx){
            this.temp = this.temp.next;
            this.c++;
        }
        
        if (this.c == dx){
            this.data = this.temp.data;
            console.log(`[list | pre-if | this.data] ${this.data}`)
            if (this.temp.next){
                console.log(`[remove | pre-swap | temp] ${this.temp.data}`);
                console.log(`[remove | pre-swap | temp.prev] ${this.temp.prev.data}`);
                console.log(`[remove | pre-swap | temp.next] ${this.temp.next.data}`);
                console.log(`[remove | pre-swap | temp.prev.next] ${this.temp.prev.next.data}`);
                this.temp.prev.next = this.temp.next;
                this.temp.next.prev = this.temp.prev;
                console.log(`[remove | post-swap | temp] ${this.temp.data}`);
                console.log(`[remove | post-swap | temp.prev] ${this.temp.prev.data}`);
                console.log(`[remove | post-swap | temp.next] ${this.temp.next.data}`);
                console.log(`[remove | post-swap | temp.prev.next] ${this.temp.prev.next.data}`);
                this.temp = null;
                console.log(`[remove | post-free | temp] ${this.temp}`);
                // console.log(`[remove | post-free | temp.prev] ${this.temp.prev}`);
                // console.log(`[remove | post-free | temp.next] ${this.temp.next}`);
                // console.log(`[remove | post-free | temp.prev.next] ${this.temp.prev.next}`);
            }
            else {
                this.temp.prev.next = null;
                this.temp = null;
            }
            this.decrCount();
            console.log(`[remove | normal] ${this.data}`)
            return this.data;
        }
    }

    removeHead = () => {
        this.temp = this.root;
        this.root = this.root.next;
        this.data = this.temp.data;
        this.temp = null;
        this.decrCount();
        console.log(`[remove | head] ${this.data}`)
        return this.data;
    }

    removeLast = () => {
        return this.remove(this.getCount() - 1);
    }
    
    getCount = () => this.count;

    incrCount = () => ++this.count;

    decrCount = () => --this.count;
}