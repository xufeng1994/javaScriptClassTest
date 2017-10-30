/**
 *  JavaScript  优先队列
 * 
 * 优先基本 1>2>3
 */

function PriorityQueue() {
    let items = [];
    let length = 0;

    function PriorityElement(element, prioNum) {
        this.element = element;
        this.prioNum = prioNum;
    }
    let j = 0
    this.enqueue = function (element, prioNum) {
        let priorityelement = new PriorityElement(element, prioNum)
        if (this.isEmpty()) {
            items.push(priorityelement)

        } else {
            let added = false;
            for (let i = 0; i < items.length; i++) {
                if (priorityelement.prioNum < items[i].prioNum) {
                    items.splice(i, 0, priorityelement)
                    added = true;
                    j++;
                    break;
                }
            }
            if (!added) {
                items.push(priorityelement)
                j++;
            }
            length++;
        }

    }
    this.dequeue = function () {
        return items.shift()
    }
    this.front = function () {
        return items[0]
    }
    this.size = function () {
        return items.length
    }
    this.isEmpty = function () {
        return items.length == 0
    }
    this.print = function () {
        console.log(JSON.stringify(items))
    }
}
// let queue = new PriorityQueue()
// queue.enqueue("Tom", 4)
// queue.enqueue("Lisa", 8)
// queue.enqueue("Mac", 6)
// queue.print()
