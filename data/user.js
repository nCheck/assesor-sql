//var mongoose = require('mongoose');
//var passportlocalmongoose=require('passport-local-mongoose')
//var Subject=require("./subject");
//var Schema = mongoose.Schema;
//console.log("i m here");


//var userSchema = new mongoose.Schema({
//	username : String,
//	password : String ,
//	role :{
//		type : String,
//		default : 'Teacher'
//	},
//	subjects:[{type : Schema.Types.ObjectId, ref: 'Subject'}],
//});
//
//module.exports=mongoose.model('User',userSchema);


const Sequelize = require('sequelize');
const sequelize = require('./db')
const Subject = require('./subject')





// User.belongsToMany(Subject, {
//   as : 'subjects' ,
//   through: {
//     model: Subject,
//     unique: false,
//   },
//   foreignKey: '_id',
//   constraints: false
// });

// Subject.belongsToMany(User, {
//   as : 'users', 
//   through: {
//     model: User,
//     unique: false,
    
//   },
//   foreignKey: '_id',
//   constraints: false
// });

module.exports = (Sequelize , sequelize)=>{
  var User = sequelize.define('user', {

    _id :{
      type:Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey:true
      },
      username: {
      type: Sequelize.STRING,
      allowNull: false
      },
      password: {
      type: Sequelize.STRING,
      allowNull: false
      },
      role: {
        type: Sequelize.ENUM,
        values : ['Teacher' , 'Admin' , 'Student' , 'Vistor'] ,
        defaultValue : 'Teacher'
    }
  
    });

    return User
};
