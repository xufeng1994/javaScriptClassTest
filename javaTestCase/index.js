/**
 * 
 * 1.投币  
 *  1开始游戏 
 *  2结束游戏
 *  2.每次投币获取三个随机数。
 *  3.将三个随机数转换成数组
 *  4.三个数一致一等奖，两个一致二等奖
 *  5.输出结果退出
 */

function Game() {
    console.log("游戏开始：")
    let arr = []
    this.getArr = function () {
        for (let i = 0; i < 3; i++) {
            arr[i] = Math.floor(Math.random() * 10)
        }
        console.log("您摇到的数字为", arr[0], arr[1], arr[2])
    }
    this.gameAt = function () {
        console.log("游戏开始：")
        let same = 0
        for (let i = 0; i < 2; i++) {
            for (let j = i + 1; j < 3; j++) {
                if (arr[i] == arr[j]) {
                    same++;
                }
            }
        }
        switch (same) {
            case 3:
                console.log("恭喜你！获得一等奖");
                break;
            case 1:
                console.log("恭喜你！获得二等奖");
                break;
            case 0:
                console.log("很遗憾，您没有中奖");
                break;
        }
        console.log(same)
        console.log("小游戏结束")
    }
}

let game = new Game()

game.getArr()
game.gameAt()

