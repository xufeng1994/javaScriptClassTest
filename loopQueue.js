/**
 * javaScript 队列  循环队列
 * 
 * 一个淘汰游戏
 */

 let Queue = require("./queue")
 function hotpotato(NameList,Num){
    let queue = new Queue()
    for (let i = 0 ; i < NameList.length; i++){
        queue.enqueue(NameList[i])
    } 
    while(queue.size() > 1){
        let eliminate = '';
        for(let i = 0 ; i < Num; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminate = queue.dequeue()
        console.log(eliminate+"退出游戏")
    }

    return queue.dequeue()
    
 }

 let name = ["xufeng","pangzi","tuhao","haiyang","zhenyu",]
 let winner = hotpotato(name,7)
 console.log(winner+"胜出")