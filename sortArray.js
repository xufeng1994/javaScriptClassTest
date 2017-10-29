/**
 * 输入一串数字，将这个数字逆序输出

 * 
 */
let num = 23413455647

num = num + ""
let a = []
for (let i = num.length - 1; i >= 0; i--) {
    a.push(num[i])
}
//console.log(a)

//*    输出一组数据，求出积最大的那三位数

function compare(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0
}

function sortByAmass(arr) {
    arr.sort(compare)
    let count = 0
    // 如果存在负数 且负数数量大于二
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) count++
    }
    if (count >= 2) {  // 负数数量必须大于二  才有可能加入到积里面去乘
        if (arr[0] * arr[1] > arr[arr.length - 1] * arr[arr.length - 2] ) { //如果存在正数和负数
            console.log("这三个数分别为：", arr[0], arr[1], arr[arr.length - 1])        //满足负数之积 大于 正数之积 
            console.log("最大积为", arr[0] * arr[1] * arr[arr.length - 1])
        } else {
            console.log("这三个数分别为：", arr[arr.length - 1], arr[arr.length - 2], arr[arr.length - 3])        //满足负数之积 小于 正数之积 
            console.log("最大积为", arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3])
        }
    } else {
        console.log("这三个数分别为：", arr[arr.length - 1], arr[arr.length - 2], arr[arr.length - 3])
    }

}

let arr1 = [-1, -3, -54, -3, -8, -29, -19, 4, 2, 6, 4, 3, 65, 2, 7]
console.log(arr1)
sortByAmass(arr1)
console.log(arr1)

let arr2 = [2, 4, 5, 7, 3, 2, 0, 45, -2, 4, -2, -43, -2, 3, 34]
sortByAmass(arr2)
console.log(arr2)