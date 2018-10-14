const Sequelize = require('sequelize');

const sequelize = new Sequelize('seyusuvj', 'seyusuvj', 'hiS7SuLFjBIvEedqXR8NMk4hVXXHsaRP', {
  dialect: 'postgres',
  host: "elmer.db.elephantsql.com",
  port: 5432,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




var User = require('./user')(Sequelize , sequelize);
var Tool = require('./toolData')(Sequelize , sequelize);
var CO = require('./co')(Sequelize , sequelize);
var Subject = require('./subject')(Sequelize , sequelize);




var Teaches = sequelize.define('teach' , {} )

//Many to Many Rel
User.belongsToMany( Subject , { through:Teaches , unique:false } )
Subject.belongsToMany( User , { through:Teaches , unique:false } )

//One to Many Rel
Subject.hasMany(CO)
CO.belongsTo(Subject)

CO.hasMany(Tool)
Tool.belongsTo(CO)


// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })


module.exports = {
  User , Subject , Teaches , CO , Tool
}










// module.exports.user = 
//   const User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
//   });
  
// //   // force: true will drop the table if it already exists
// //   // User.sync({force: true}).then(() => {
// //   //   // Table created
// //   //   return 
// //   // });
//   User.create({
//     firstName: 'James',
//     lastName: 'Potro'
// }).then(emp=>{
//   console.table(emp)
// });