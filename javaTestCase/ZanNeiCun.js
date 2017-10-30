/**
 * 
 * javascript    栈
 * 
 */
function Stack() {
    let items = [];
    this.push = function(element){
        items.push(element)
    }
    this.pop = function () {
         return items.pop()
    }
    this.peek = function () {
        return items[items.length - 1]
    }
    this.clear = function () {
        items = []
    }
    this.size = function () {
        return items.length
    }
    this.isEmpty = function () {
        return items.length == 0
    }
    this.print = function () {
        console.log(items.toString())
    }
}

let stack = new Stack()
// console.log(stack.isEmpty())

// stack.push(1)
// stack.push(2)
// stack.push(10)
// stack.push(11)

// console.log(stack.pop())
// stack.print()

// console.log(stack.size())

// console.log(stack.peek())
// stack.print()
// stack.pop()
// stack.print()

module.exports = Stack;