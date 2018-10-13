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

var userSchema = sequelize.define('User', {

	_id :{
		type:Sequelize.INTEGER,
		autoIncrement:true,
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
      type: Sequelize.STRING,
			Defaultvalue:'Teacher'
	},
	subjects:{
		 type: Sequelize.STRING,
	}

  });

module.exports = userSchema;
