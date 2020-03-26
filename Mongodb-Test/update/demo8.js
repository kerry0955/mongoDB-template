/**
    状态返回与安全
        在操作数据库时，对数据的修改是需要有足够的安全措施的，其实在实际工作中，
        我们用db.collections.update的时候不多，在修改时我们都会用findAndModify，
        它可以给我们返回来一些必要的参数，让我们对修改多了很多控制力，
        控制力的加强也就是对安全的强化能力加强了。
 */
var db = connect('log')
//  db.runCommand( ) 来执行
/***
 var work1 = {
    name: 'jsguan',
    age: 33,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        SkillTwo: 'JavaScript',
        SkillThree: 'PHP'
    },
    regeditTime: new Date()
}

db.work.insert(work1)
db.work.update({sex:1},{$set:{money:1000}},false,true)
var resultMessage=db.runCommand({getLastError:1})
printjson(resultMessage);
        false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
        true：true是multi的简写，代表修改所有，这两个我们在前边课程已经学过。
        getLastError:1 :表示返回功能错误，这里的参数很多，如果有兴趣请自行查找学习，这里不作过多介绍。
        printjson：表示以json对象的格式输出到控制台。
        db.runCommand({ping:1}) // 返回ok：1就代表链接正常。
 */


/***
findAndModify:

        从名字上就可以看出，findAndModify是查找并修改的意思。
        配置它可以在修改后给我们返回修改的结果。我们先看下面的代码：
        query：需要查询的条件/文档
        sort: 进行排序
        remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
        new:[boolean]返回更新前的文档还是更新后的文档。
        fields：需要返回的字段
        upsert：没有这个值是否增加。
 */
 var myModify={
    findAndModify:"work",
    query:{name:'jsguan'},
    update:{$set:{age:180000}},
    new:true    //更新完成，需要查看结果，如果为false不进行查看结果
}
var ResultMessage=db.runCommand(myModify);

printjson(ResultMessage)