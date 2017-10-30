/*
*
*javascript 数组方法
*
*/
let arrA = [2,4,6,8,10,4,12,60,3,64,24,12,24]
let arrB = [51,52,53,54,55]
let arr
let isbool

//concat  链接两个或者更多数组，并返回结果

arr = arrA.concat(arrB)
console.log(arr)
//every 对组中每一项运行给定函数，如果每一项返回都为true 则返回true，如果有一项返回false  则返回false
let iseven = function (x){
   return( x % 2 == 0)? true:false
}
console.log(arrB.every(iseven))
//some 对组中每一项运行给定函数，如果任意一项项返回为true 则返回true，全部返回false  则返回false

console.log(arrB.some(iseven))

// filter 对组中每一项运行给定函数， 并将返回值为true的函数组成数组
console.log(arrB.filter(iseven))
 
// map  对组中每一项运行给定函数， 将每次函数调用的结果组成数组

console.log(arrB.map(iseven))

// foreach  遍历数组
arrB.forEach(function(x){
    console.log(x% 2 ==0)
})

//indexOf 返回第一个与给定参数的数值相等数组元素的索引 ，没有则返回-1

console.log(arrA.indexOf(3))
console.log(arrA.indexOf(4))

//lastIndexOf 返回第一个与给定参数的数值相等数组元素的索引 ，没有则返回-1

console.log(arrA.lastIndexOf(4))

// join() 将数组中所有元素连成一个字符串

console.log(arrA.join())

//slice 传入索引值  返回 数组里对应索引返回内的元素 如例子中只返回3,4,5对应的元素
console.log(arr.slice(3,6))

//sort 按照字母顺序对数组排序，支持输入制定排序方式的方法作为参数
let a =[2,4,6,2,76,2,34,8,32,4,65]
console.log(a.sort())
// 自定义排序
let compare = function(x,y){
    if(x>y)  return 1
    if(x<y)  return -1
    return 0    
}
    console.log(a.sort(compare))

// reverse   颠倒数组中的元素
console.log(a.reverse(compare))

// toString 把数组转为字符串
console.log(a.toString())


// valueOf  返回制定对象的原始值
let b =[234,456,567,87,890,34]
console.log(b.valueOf())
