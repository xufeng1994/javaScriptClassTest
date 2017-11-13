//集合  是由 一组无序 且唯一的项组成
function Set (){
    let item ={}
    let length = 0;

    this.add = function(value){
        if(!this.has(value)){
            item[value] = value;
            length++;
            return true;
        }else{
            return false;
        }
    }
    this.remove = function(value){
        if(!this.has(value)){
            delete item[value];
            length--;
            return true;
        }else{
            return false;
        }
    }
    this.clear = function(){
        item = {}
    }
    this.has = function(value){
        return value in item;
    }
    this.size = function(){
        return length;
    }
    this.values = function(){
        return Object.keys(item)
    }
    //  并集
    this.union = function(otherSet){
       let unionSet = new Set()
       let values = this.values();
       for (let i = 0;i< values.length;i++){
            unionSet.add(values[i])
       }
       values = otherSet.values()
       for (let i = 0;i< values.length;i++){
            unionSet.add(values[i])
        }
        return unionSet;
    }
    //  交集
    this.insert = function(otherSet){
        let insertSet = new Set()
        let values =this.values();
        for (let i = 0; i < values.length; i++ ){
            if(otherSet.has(values[i])){
                insertSet.add(values[i])
            }
        }
        return insertSet;
    }
    // 差集
    this.different = function(otherSet){
        let diffSet = new Set()
        let values = this.values()
        for (let i = 0 ;i < values.length; i++){
            if (!otherSet.has(values[i])){
                diffSet.add(values[i])
            }   
        }
        return diffSet;
    }
    // 子集
    this.subSet = function(otherSet){
        if(this.size <otherSet.size){
            return false;
        }else{
            let values =this.values();
            for(let i = 0; i <values.length;i++){
                if(!otherSet.has(values[i])){
                    return false;
                }else{
                    return true;
                }
            }
        }

    }
}

let setA = new Set();
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)

let setB = new Set();
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
let unionSet = setA.union(setB)

console.log(unionSet.values())
console.log(setA.insert(setB).values())
console.log(setA.different(setB).values())
console.log(unionSet.subSet(setA))
