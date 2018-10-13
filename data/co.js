// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var Tool=require('./tool.js');


// var coSchema = new mongoose.Schema({
// 	name : String,
// 	blooms : String,
// 	number: Number,
// 	tools:[{type:Schema.Types.ObjectId, ref: 'ToolData'}],
// 	attainment : {
// 		type : Number,
// 		default : 0
// 	},
// });

const Sequelize = require('sequelize');
const sequelize = require('./db')

var coSchema = sequelize.define('co', {

	_id :{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
    name: {
	  type: Sequelize.STRING,
	  allowNull: false
    },
    blooms: {
      type: Sequelize.STRING
	} ,
	cno :{
		type : Sequelize.INTEGER 
	},
	year :{
		type : Sequelize.INTEGER
	}

  });

module.exports = coSchema;
