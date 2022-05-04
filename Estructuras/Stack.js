class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }

    push(element){
        this.items[this.count] = element
        this.count += 1
        console.log(element)
        return this.count -1
    }

    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(deleteItem, " eliminado")
        return deleteItem
    }
    
}

const stack = new Stack();

stack.push("carro")
stack.push("moto")
stack.push("tractor")

stack.pop()
