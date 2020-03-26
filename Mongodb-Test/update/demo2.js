/**
 * 在操作数据库时要注意两个能力：
    第一个是快速存储能力。
    第二个是方便迅速查询能力。
 批量插入：
 db.test.insert([
    {"_id":1},
    {"_id":2},
    {"_id":3}
])

批量插入性能测试
刚学了批量插入，那是循环插入快？还是批量插入快那？
在一般人的认知里肯定是批量插入更快（其实这毋庸置疑），
但我们要拿出极客精神，探个究竟，试着写一个小Shell，来验证一下结果。

&&& 结果 批量插入更快一些

 */
var db = connect('log');  //链接数据库
// db.login.insert(
//     [
//         { "_id": 1, name: '批量插入测试数据' },
//         { "_id": 2, name: '批量插入测试数据' },
//         { "_id": 3, name: '批量插入测试数据' }
//     ]
// )

var startTime = (new Date()).getTime(); //得到开始时间
var db = connect('log');  //链接数据库
//开始循环
// for (let i = 0;i < 1000;i++) {
//     db.login.insert({ num: i, name: '循环插入数据' });
// }
// 批量插入
var tempArray = []              //声明一个数组
for (let i = 0;i < 1000;i++) {        //循环向数组中放入值
    tempArray.push({ num: i });
}
db.test.insert(tempArray)       //批量一次插入

var runTime = (new Date()).getTime() - startTime;//计算时间差
print('This run this is:' + runTime + 'ms');//打印出来

// print('[demo]log  print success');  //没有错误显示成功