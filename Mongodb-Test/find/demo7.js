
var startTime = new Date().getTime()  //得到程序运行的开始时间
var db = connect('company')          //链接数据库
// 普通查询数据
// var rs = db.randomInfo.find({ username: "m2tqmf" })  //根据用户名查找用户
// rs.forEach(rs => { printjson(rs) })                     //循环输出

// 建立索引
// 试着为用户名（username）建立索引。建立索引只需要一句话就可以了。

printjson(db.randomInfo.ensureIndex({ username: 1 }))

var runTime = new Date().getTime() - startTime;      //得到程序运行时间
print('[SUCCESS]This run time is:' + runTime + 'ms')    //打印出运行时间

// 建立一下索引
db.randomInfo.ensureIndex({ uername: 1 })
// 查看一下索引
db.randomInfo.getIndexes()

// 建立全文索引

db.info.ensureIndex({ contextInfo: 'text' })
需要注意的是这里使用text关键词来代表全文索引，我们在这里就不建立数据模型了。

全文索引查找 建立好了全文索引就可以查找了，查找时需要两个关键修饰符:

$text: 表示要在全文索引中查东西。
$search: 后边跟查找的内容。
db.info.find({ $text: { $search: "programmer" } })

转义符：

全文搜索中是支持转义符的，比如我们想搜索的是两个词（love PlayGame和drink），这时候需要使用\斜杠来转意。

db.info.find({ $text: { $search: "\"love PlayGame\" drink" } })