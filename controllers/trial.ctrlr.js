const CO = require('../data/co')

myCo = {
    name : 'HowI',
    blooms : 'Blue',
    // cno : 5
}
// CO.sync({alter: true}).then(()=>{

// })

CO.create(myCo).then(co=>{
    console.log(co)
  });