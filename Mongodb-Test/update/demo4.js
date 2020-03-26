/**update
 * 正确修改方法:
    可以声明一个变量，然后把要改变数据的全部信息放入变量，最后执行修改操作。
 */
var db = connect('log')

var workmate3 = {
    name: 'MinJie',
    age: 20,
    sex: 0,
    job: 'UI设计',
    skill: {
        skillOne: 'PhotoShop',
        SkillTwo: 'UI',
        SkillThree: 'Word+Excel+PPT'
    },
    regeditTime: new Date()
}
db.workmate.update({ name: 'MinJie' }, workmate3)
//这时候 你会发现一个问题 更新后 之前的数据 不在了

print('[update]: The data was updated successfully');