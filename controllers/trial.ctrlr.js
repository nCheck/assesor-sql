const CO = require('../data/co')

myCo = {
    name : 'Lopi',
    blooms : 'Karyo',
    cno : 1
}
// CO.sync({force: true}).then(()=>{
//     CO.create(myCo).then(co=>{
//         console.log(co)
//       });
// })

CO.create(myCo).then(co=>{
    console.log(co)
  });