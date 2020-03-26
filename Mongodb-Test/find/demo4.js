/***
find 对数组查询

 */
var db = connect('company')
// db.workmate.drop()
// load('./demo1.js')

db.workmate.find({interest:['画画','聚会','看电影']},
    {name:1,interest:1,age:1,_id:0} 
)

$all-数组多项查询
db.workmate.find(
    {interest:{$all:["看电影","做饭"]}},
    {name:1,interest:1,age:1,_id:0} 
)
$in-数组的或者查询  $in主要满足数组中的一项就可以被查出来
db.workmate.find(
    {interest:{$in:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
)
$size-数组个数查询

$size修饰符可以根据数组的数量查询出结果。
db.workmate.find(
    {interest:{$size:5}},
    {name:1,interest:1,age:1,_id:0} 
)
$slice-显示选项

有时候我并不需要显示出数组中的所有值，而是只显示前两项，比如我们现在想显示每个人兴趣的前两项，而不是把每个人所有的兴趣都显示出来

db.workmate.find(
    {},
    {name:1,interest:{$slice:2},age:1,_id:0} 
)
db.workmate.find(
    {},
    {name:1,interest:{$slice:-1},age:1,_id:0}  //左后一项
)