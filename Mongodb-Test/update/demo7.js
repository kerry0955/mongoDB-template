/**
 * update 数组修改器
 * ** $push追加数组/内嵌文档值**

$push的功能是追加数组中的值，但我们也经常用它操作内嵌稳文档，
就是{}对象型的值。先看一个追加数组值的方式，比如我们要给小王加上一个爱好(interset)为画画（draw）：
 */
var db = connect('log')
// $push追加数组
// db.workmate.update({ name: 'xiaoWang' }, { $push: { interest: { name: 'draw' } } })

// $push修饰符还可以为内嵌文档增加值
// db.workmate.update({ name: 'MinJie' }, { $push: { "skill.skillFour": 'draw' } })

// $ne查找是否存在 总结：没有则修改，有则不修改。
// db.workmate.update({name:'xiaoWang',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})

// $addToSet 升级版的$ne
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:'readBook'}})

// 批量添加 $each 
var newInter = ['sing','code','dance']
db.workmate.update({name:"xiaoWang"},{$addToSet:{$each:newInter}})

// $pop 删除数组
/**
$pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1和-1。

1：从数组末端进行删除
-1：从数组开端进行删除
 */

 db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})
 
//  数组定位修改 例子，比如我们现在要修改xiaoWang的第三个兴趣为编码（Code），注意这里的计数是从0开始的。
db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})