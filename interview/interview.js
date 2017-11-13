// 8. 给一串数字，任意两个数相加 是否等于所给的数num 
// Eg: arr[21,32,4,3,25,32,19,20,9,6]  num = 25
// 1) 冒泡法
let arr = [21,32,4,3,25,32,19,20,9,6];
let num = 25    
    for(let i =0; i<arr.length - 1 ; i++){
        for(let j = i+1;j < arr.length - 2;j++){
            if (arr[i]+arr[j] == num){
                console.log(arr[i],arr[j]);
            }
        }
    }

// 优化方法：
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < num) {
        arr.pop(arr[i])
    }
}

if (arr == null) {
    console.log("数组为空")
} else {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (num - arr[i] == arr[j]) {
                console.log(arr[i], arr[j])
                break;
            }
        }
    }
}



