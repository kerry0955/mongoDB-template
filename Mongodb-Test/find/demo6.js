// 随机生成百万条数据
var startTime = (new Date()).getTime();
function GetRandomNum(min, max) {
    const cha = max - min
    const round = Math.random()
    return (min + Math.round(round * cha))
}

//生成随机用户名
function GetRadomUserName(min, max) {
    let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnm".split("");//构造生成时的字母库数组
    let outPuttext = ""; //最后输出的变量
    //进行循环，随机生产用户名的长度，这里需要生成随机数方法的配合
    for (let i = 1;i < GetRandomNum(min, max);i++) {
        //随机抽取字母，拼装成需要的用户名
        outPuttext = outPuttext + tempStringArray[GetRandomNum(0, tempStringArray.length)]
    }
    return outPuttext;
}

var tempInfo = [];
for (let i = 0;i < 2000000;i++) {
    tempInfo.push({
        username: GetRadomUserName(7, 16),
        regeditTime: new Date(),
        randNum0: GetRandomNum(100000, 999999),
        randNum1: GetRandomNum(100000, 999999),
        randNum2: GetRandomNum(100000, 999999),
        randNum3: GetRandomNum(100000, 999999),
        randNum4: GetRandomNum(100000, 999999),
        randNum5: GetRandomNum(100000, 999999),
        randNum6: GetRandomNum(100000, 999999),
        randNum7: GetRandomNum(100000, 999999),
        randNum8: GetRandomNum(100000, 999999),
        randNum8: GetRandomNum(100000, 999999),
    })
}

var tempInfo = [];
for (let i = 0;i < 2000000;i++) {
    tempInfo.push({
        username: GetRadomUserName(7, 16),
        regeditTime: new Date(),
        randNum0: GetRandomNum(100000, 999999),
        randNum1: GetRandomNum(100000, 999999),
        randNum2: GetRandomNum(100000, 999999),
        randNum3: GetRandomNum(100000, 999999),
        randNum4: GetRandomNum(100000, 999999),
        randNum5: GetRandomNum(100000, 999999),
        randNum6: GetRandomNum(100000, 999999),
        randNum7: GetRandomNum(100000, 999999),
        randNum8: GetRandomNum(100000, 999999),
        randNum8: GetRandomNum(100000, 999999),
    })
}


var runTime = (new Date()).getTime() - startTime;
print('This run this is:' + runTime + 'ms');

var db = connect('company');
db.randomInfo.drop();
db.randomInfo.insert(tempInfo)