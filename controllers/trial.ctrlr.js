

var db = require('../data/db')



myCo = {
    name : 'ooops',
    blooms : 'Pooo',
    cno : 6,
    subjectId : 2,
    year: 2017 
}
myUser  ={
    username: 'suyash',
    password: 'suyash',
    role : 'Admin'
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

// db.Teaches.create({userId:'fd5a8630-cf7d-11e8-8c04-19f554a4bfd9' , subjectId:1})
// db.Teaches.create({userId:'fd5a8630-cf7d-11e8-8c04-19f554a4bfd9' , subjectId:2})

// db.User.findAll({
//     where :{
//         username : 'ncheck'
//     },
//     include : [{model:db.Subject}]
// }).then(usr=>{
//     sub = usr[0].dataValues.subjects
//     subjects = []
//     sub.forEach(ele => {
//         subjects.push( ele.dataValues.name )
//     });
//     console.log(subjects)
// })

db.Subject.findAll( { where : {name : 'PokL'}
    ,include : [{model:db.CO , where : {year:2017} }] } )
    .then(doc=>{
        // subs = doc[0].dataValues.cos
        // subs.forEach(ele => {
        //     console.log(ele.dataValues)
        // });
        var cos = doc[0].dataValues.cos
        for (d in cos){
            console.table(cos[d].dataValues)
        }
        
        
    })

