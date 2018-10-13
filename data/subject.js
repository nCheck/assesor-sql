//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//var SubjectData = require('./subjectData');

//var subjectSchema = new mongoose.Schema({
//	name:String,
//	subjectCode:String,
//	subjectData:[{type : Schema.Types.ObjectId, ref: 'SubjectData'}],
//});

//module.exports.subjectSchema = subjectSchema;
//mongoose.model('Subject' , subjectSchema);



const Sequelize = require('sequelize');
const sequelize = require('./db')

var subjectSchema = sequelize.define('Subject', {

	_id :{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
    name: {
	  type: Sequelize.STRING,
	  allowNull: false
    },
    subjectCode: {
      type: Sequelize.STRING
	}

  });

module.exports = subjectSchema;
