/**
 * 循环双向链表
 *  
 */
function doubleLinkedList(){
    let Node = function(element){
        this.element = element;
        this.prev = null;
        this.next = null;
        let = index = 0;
    }
    let length = 0 ;
    let head = null;
    let tail = null;
    this.insert = function(position,element){
        if(position >= 0 && position <=length){
            let node = new Node(element)
            let current = head; 
            let previous = null;
            if(position == 0 ){
                if(!head){  //  如果不存在元素 
                    current = node ;   
                    previous = node ;
                }else{
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            }else if(position == length){
                current = tail;
                current.next = node;
                node.prev = current
                tail = node 
            }else{
                while(index++ <position){
                    previous = current;
                    current = current.next;
                }
                node.next = current
                current.prev = node 

                previous.next = node 
                node.prev = previous
            }
            length++;
            return true;
        }else{
        return false;
        }
    }

    this.remove = function (element) {
        let index = this.indexOf(element)
        this.removeAt(index)
    }

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

    this.remove = function (element) {
        let index = this.indexOf(element)
        this.removeAt(index)
    }

    this.indexOf = function (element) {
        let current = head
        let index = 0
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next
        }
        return -1;
    }
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

let list = new doubleLinkedList();
list.append(23)
list.append(45)
list.append(98)
list.print()
list.insert(2,5)
list.print()