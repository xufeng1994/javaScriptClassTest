//数组 的添加数字的方法
let Array = [2,4,56,2,1,6,7,32,6]

//  push 在数组末尾添加
Array[0] = 1
Array.push(0,2)

console.log(Array)

// unshift    在数组前面添加
Array.unshift(10)
console.log(Array)

// pop  删除最后一个数
Array.pop()
console.log(Array)

// shift 删除第一个数

Array.shift()
console.log(Array)

// splice 删除中间的值 

Array.splice(1,2)
console.log(Array)