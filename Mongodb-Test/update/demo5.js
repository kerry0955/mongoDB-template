//执行命令如下:
/**
 * 这时候你需要删除（db.workmate.drop()）表中的数据，
 * 因为MinJie这个用户已经不在数据库中了，
 * 然后重新使用load方法载入插入数据再进行修改。
 */
var db = connect('log')
db.workmate.drop()
load('./demo3.js')
load('./demo4.js')