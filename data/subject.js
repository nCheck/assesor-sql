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
			type:Sequelize.UUID,
			defaultValue: Sequelize.UUIDV1,
		
		},
		name: {
		  type: Sequelize.STRING,
			primaryKey:true
		},
		subjectCode: {
		  type: Sequelize.STRING
		}
	
	  });

	  return subjectSchema

};
