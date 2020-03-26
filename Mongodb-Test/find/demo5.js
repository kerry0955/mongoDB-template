/***
        操作find方法的第一个参数（query）和第二个参数（fields）。
        find还有几个常用的参数，这些参数多用在分页和排序上。
 */
// find 常用参数
/**
 * find参数：

query：这个就是查询条件，MongoDB默认的第一个参数。
fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
skip:跳过多少个显示，和limit结合可以实现分页。
sort：排序方式，从小到大排序使用1，从大到小排序使用-1。
 */

var db = connect('log')
// 分页Demo：
// db.workmate.find({}, { name: true, age: true, _id: false }).limit(0).skip(2).sort({ age: 1 });

// // $where修饰符
// db.workmate.find(
//         { $where: "this.age>30" },
//         { name: true, age: true, _id: false }
// )
var result = db.workmate.find() //声明变量result，并把查询结果赋值给result

//利用游标的hasNext()进行循环输出结果。
while (result.hasNext()) {
        printjson(result.next())  //用json格式打印结果
}

//利用游标的hasNext()进行循环输出结果。
result.forEach(function (result) {
        printjson(result)
})