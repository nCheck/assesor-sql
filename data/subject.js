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






module.exports = (Sequelize , sequelize)=>{

	var subjectSchema = sequelize.define('subject', {

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

	  return subjectSchema

};
