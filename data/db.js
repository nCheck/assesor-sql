const Sequelize = require('sequelize');
// const newCon = 'postgres://seyusuvj:hiS7SuLFjBIvEedqXR8NMk4hVXXHsaRP@elmer.db.elephantsql.com:5432/seyusuvj'
// const sequelize = new Sequelize(newCon);

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


module.exports = sequelize
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