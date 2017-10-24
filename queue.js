/**
 * javaScript  队列的数据结构模拟
 * 
 * 建创一个队列
 */

function Queue() {
    let items = [];

    this.enqueue = function(element){
        items.push(element)
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
        console.log(items.toString())
    }
}
// let queue = new Queue()

// console.log(queue.isEmpty())
// queue.enqueue("xufeng")
// queue.enqueue("zhangying")
// queue.enqueue("haiyang")
// queue.enqueue("xuanxuan")
// queue.print()
// queue.dequeue()
// queue.print()
module.exports = Queue; 