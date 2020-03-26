/***
 * update 修改器
 * $set修改器

用来修改一个指定的键值(key),这时候我们要修改上节课的sex和age就非常方便了，只要一句话就可以搞定。

dbd .workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})
修改好后，我们可以用db.workmate.find()来进行查看，你会发现数据已经被修改。

&&修改嵌套内容(内嵌文档)

比如现在的UI的技能发生了变化，说她不会作PPT而是word作的很好，需要进行修改。这时候你会发现skill数据是内嵌的，这时候我们可以属性的形式进行修改，skill.skillThree。具体看下面的代码。

db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})
这样就可以简单的修改内嵌文档了。

&&& $unset用于将key删除

它的作用其实就是删除一个key值和键。一般女孩子都是不希望看到自己的年龄的，所以要求我们把年龄删除。这时候我们就可以使用$unset的形式。

db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})
当你删除后，想加回来可以直接用set进行添加。
upsert选项

upsert是在找不到值的情况下，直接插入这条数据。比如我们这时候又来了一个新同事xiaoWang，我们这时候修改他的信息，age设置成20岁，但集合中并没有这条数据。这时候可以使用upsert选项直接添加。

db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})
upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。
 */

var db = connect('log')

// db.workmate.update({ "name": "MinJie" }, { "$set": { sex: 2, age: 38 } })
// 修改嵌套内容(内嵌文档)
// db.workmate.update({ "name": "MinJie" }, { "$set": { "skill.skillThree": '说她不会作PPT而是word作的很好' } })

// db.workmate.update({ "name": "MinJie" }, { $unset: { "skill.skillThree": '' } })

// $inc对数字进行计算
db.workmate.update({ "name": "MinJie" }, { $inc: { "age": -2 } })

//multi选项  每个人的爱好也加入进来
// db.workmate.update({}, { $set: { interset: [] } }) 
// 这时候你用db.workmate.find()查找，你会发现只改变了第一个数据，其他两条没有改变。这时候我们想改变就要用到multi选项。
// db.workmate.update({}, { $set: { interset: [] } }, { multi: true })

// upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。
db.workmate.update({ name: 'xiaoWang' }, { $set: { age: 20 } }, { upsert: true })