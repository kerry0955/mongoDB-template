db.workmate.find({"skill.skillOne":"HTML+CSS"})
// 筛选字段
db.workmate.find(
    {"skill.skillOne":"HTML+CSS"},
    {name:true,"skill.skillOne":true}
)
不等修饰符

小于   ($lt):英文全称less-than
小于等于    ($lte)：英文全称less-than-equal
大于    ($gt):英文全称greater-than
大于等于    ($gte):英文全称greater-than-equal
不等于  ($ne):英文全称not-equal 我们现在要查找一下，公司内年龄小于30大于25岁的人员。看下面的代码。
db.workmate.find(
    {age:{$lte:30,$gte:25}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)

日期查找

MongoDB也提供了方便的日期查找方法，现在我们要查找注册日期大于2018年1月10日的数据，我们可以这样写代码。
var startDate= new Date('01/01/2018');
db.workmate.find(
    {regeditTime:{$lt:startDate}},
    {name:true,age:true,"skill.skillOne":true,_id:false,regeditTime:true}
)