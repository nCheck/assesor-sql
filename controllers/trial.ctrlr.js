

var db = require('../data/db')



myCo = {
    name : 'Danci',
    blooms : 'Samba',
    cno : 2,
    subjectId : 4 
}
myUser  ={
    username: 'nchecl',
    password: 'ncheck', 
}

mySub = {
    name : 'OOPM' ,
    subjectCode : 'CSOO1'
}
myT = {
    userId : '7c4f7c20-cf74-11e8-bd9f-5f4c5681c784' ,
    subjectId : 1
}
// CO.sync({force: true}).then(()=>{
//     CO.create(myCo).then(co=>{
//         console.log(co)
//       });
// })

// db.CO.create(myCo).then(co=>{
//     console.log(co)
//   });

// User.sync({force: true}).then(()=>{
//     User.create(myUser).then(usr=>{
//         console.log(usr)
//     })
// })

// Subject.sync({force: true}).then(()=>{

// })

// db.User.create(myUser).then(usr=>{
//     console.log(usr)
// })

// db.Teaches.create(myT).then(sub=>{
//     console.table(sub.dataValues)
// })

// db.Subject.create(mySub).then(usr=>{
//     console.log(usr)
// })

// db.Subject.findAll({
//     include : [{model:db.CO}]
// }).then(sub=>{
//     // sub = JSON.stringify(sub)
//     for(s in sub){
//         console.log( sub[s].dataValues.cos.dataValues )
//     }
// })

// db.CO.findAll({
//     include : [{model:db.Subject}]
// }).then(sub=>{
//     // sub = JSON.stringify(sub)
//     for(s in sub){
//         console.log( sub[s].dataValues )
//     }
// })