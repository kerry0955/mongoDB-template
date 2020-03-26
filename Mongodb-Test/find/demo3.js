/**
$$$ 多条件查询

很多时候我们需要查询的值不只是有一个简单的条件，
比如我们现在要查询一下同事中是33岁和25岁的，还比如我们要查询同事中大于30岁并且会PHP技能的。
 */

//  $in修饰符 $nin
db.workmate.find({age:{$in:[25,33]}},
    {name:1,"skill.skillOne":1,age:1,_id:0}
)
// $or修饰符 相对应的还有$nor修饰符
db.workmate.find({$or:[
    {age:{$gte:30}},
    {"skill.skillThree":'PHP'}
]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)
// $and修饰符
db.workmate.find({$and:[
    {age:{$gte:30}},
    {"skill.skillThree":'PHP'}
]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)
$not修饰符
db.workmate.find({
    age:{
        $not:{
            $lte:30,
            $gte:20
        }
    }
},
{name:1,"skill.skillOne":1,age:1,_id:0}
)