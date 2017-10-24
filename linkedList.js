/**
 * javaScript 链表
 * 
 */
function linkedlist() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    let head = null;
    let length = 0;
    this.append = function (element) {
        let node = new Node(element)

        if (head === null) {
            head = node;
        } else {
            let current;
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
        length++;
    }
    this.insertAt = function (position, element) {
        if (position >= 0 && position <= length){
            let current = head
            let previous ;
            let index = 0;
            let node = new Node(element)
            if (position == 0){
                head = node;
                node.next = current;
            }else{
                while(index ++<position){
                    
                }
            }
            length ++;
            return true
        }else{
            return false 
        }
        

    }
    this.remove = function (element) { }
    this.removeAt = function (position) {
        if (position > -1 && position < length){
            let current = head;
            let previous;
            let index = 0 
            if (position === 0 ){
                head = current.next
            }else
            while(index++ <position){
                previous = current
                current = current.next
            }
            previous.next = current.next
            length --;
            return current.element;
        }else{
            return null
        }
    }
    this.indexOf = function (element) { }
    this.size = function () {
        return length;
    }
    this.toString = function () {
        let current = head;
        let string = "";
        while (current) {
            string += current.element + (current.next ? "," : "")
            current = current.next
        }
        return string
    }
    this.print = function () {
        console.log(this.toString())
    }
}

let list = new linkedlist()
console.log(list.size())
list.append(10)
console.log(list.size())
list.append(12)
console.log(list.size())
list.append(16)
list.append(20)
list.print()
list.insertAt(0,18)
list.print()