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


module.exports = (Sequelize , sequelize)=>{

	var coSchema = sequelize.define('co', {

		_id :{
			type:Sequelize.UUID,
			defaultValue: Sequelize.UUIDV1,
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

	  return coSchema

};
