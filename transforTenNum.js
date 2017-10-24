/**
 * 转换进制数
 * 
 */
let Stack = require("./ZanNeiCun")
function  devideBy2(num) {
    let stack = new Stack();
    let rem;    
    let binaryString = '';
    
    while (num>0){
        rem = Math.floor(num%2)
        stack.push(rem)
        num = Math.floor(num/2)
    }

    while (!stack.isEmpty()){
       binaryString += stack.pop().toString()
    }
    return binaryString;
}
// console.log(devideBy2(10))

//   转换成任意 进制

function numTransfer(num,base){
    let stack = Stack()
    let rem ;
    let digital = '0123456789ABCDEF';
    let result ='';
    while(num >0){
        rem = Math.floor(num % base)
        stack.push(rem)
        num = Math.floor(num / base)
    }
    while(!stack.isEmpty()){
        result += digital[stack.pop()]
    }
    return result;
}

console.log(numTransfer(10,2))