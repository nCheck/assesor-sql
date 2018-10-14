

var db = require('../data/db')



myCo = {
    name : 'ooops',
    blooms : 'Pooo',
    cno : 6,
    subjectName : 'OOPM',
    year: 2017 
}
myCo2 = {
    name : 'pilate',
    blooms : 'yoga',
    cno : 5,
    subjectName : 'OOPM',
    year: 2018 
}
myCo3 = {
    name : 'tuhi',
    blooms : 'yuo',
    cno : 7,
    subjectName : 'OOPM',
    year: 2017 
}


myUser  ={
    username: 'suyash',
    password: 'suyash',
    // role : 'Admin'
}

myUser2  ={
    username: 'ncheck',
    password: 'ncheck'
}

mySub = {
    name : 'OOPM' ,
    subjectCode : 'CSOO1'
}
mySub2 = {
    name : 'TCS' ,
    subjectCode : 'CSOO2'
}

myT = {
    tool : 'UT',
    weightage : 2,
    coId : '2e34c4c0-cf9f-11e8-ada7-2928b4f31f1b'
}

myT2 = {
    tool : 'MP',
    weightage : 3,
    coId : '2e34c4c0-cf9f-11e8-ada7-2928b4f31f1b'
}

myT3 = {
    tool : 'UT',
    weightage : 2,
    coId : '2e3476a0-cf9f-11e8-ada7-2928b4f31f1b'
}

myT4 = {
    tool : 'Courser',
    weightage : 1,
    coId : '2e3476a0-cf9f-11e8-ada7-2928b4f31f1b'
}
// CO.sync({force: true}).then(()=>{
//     CO.create(myCo).then(co=>{
//         console.log(co)
//       });
// })

// db.CO.create(myCo).then(co=>{
//     console.log(co)
//   });

// db.CO.create(myCo2).then(co=>{
//     console.log(co)
//   });

// db.CO.create(myCo3).then(co=>{
// console.log(co)
// });

// db.Tool.create( myT )
// db.Tool.create( myT2 )
// db.Tool.create( myT3 )
// db.Tool.create( myT4 )

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
// db.User.create(myUser2).then(usr=>{
//     console.log(usr)
// })

// db.Teaches.create(myT).then(sub=>{
//     console.table(sub.dataValues)
// })

// db.Subject.create(mySub).then(usr=>{
//     console.log(usr)
// })
// db.Subject.create(mySub2).then(usr=>{
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

// db.Subject.findAll( { where : {name : 'PokL'}
//     ,include : [{model:db.CO , where : {year:2017} }] } )
//     .then(doc=>{
//         // subs = doc[0].dataValues.cos
//         // subs.forEach(ele => {
//         //     console.log(ele.dataValues)
//         // });
//         var cos = doc[0].dataValues.cos
//         for (d in cos){
//             console.table(cos[d].dataValues)
//         }
        
        
//     })




// db.Subject.findAll({ include:[{model : db.User , where :{username:'suyash'}}] })
//     .then(sub=>{
//         subs = []
//         sub.forEach(s => {
//             subs.push(s.dataValues.name)
//         });
//         console.log(subs)
//     })




// console.log(" i m in the new SQL co.getCOPage ");
// db.Subject.findAll({
  
//   where: {
//     name:'OOPM',
     
//   },

// }).then(sub=>{
//     db.CO.findAll({
//   where:{
//       year:'2018'
//   }      
//     }).then(subCo=>{
  

//         x=[]
// subCo.forEach( ss=>{
//     x.push(ss.dataValues);
// });
//         console.log( x );
//     })
  
// }); 

// db.CO.destroy({where : {_id : '2e34c4c1-cf9f-11e8-ada7-2928b4f31f1b'}})
// .then(doc=>{
//     console.log(doc)			
// })


db.CO.findAll( { where : { _id : '2e34c4c0-cf9f-11e8-ada7-2928b4f31f1b'} , include : [{model:db.Tool}] } )
        .then( cos=>{

            var cleaned = []
            cos[0].dataValues.tools.forEach(c => {
                cleaned.push(c.dataValues)
            });
            console.log(cleaned)

        })