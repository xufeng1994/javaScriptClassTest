/*
* auther: 赵增阳
* Date 2017-10-30
*/
let fs = require('fs');

let texts = fs.readFileSync('article.txt', 'utf8');

// console.log(texts);  取值

let allwords = {};// 新建一个字典
let words = texts.split(" ");  //去除空格 -- 数组

words.forEach(function (element) {
    if (allwords[element] === undefined) {
        allwords[element] = 0
    }
    allwords[element]++
});
// console.log(allwords) 存放到对象

let maxCountWord = [];
for(let word in allwords){
    maxCountWord.push([word,allwords[word]]);
}
//  数组排序
maxCountWord.sort(function(a,b){
    return b[1] - a[1]
})

console.log(maxCountWord)