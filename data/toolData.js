// var mongoose = require('mongoose');
// require('./tool');
// var Schema = mongoose.Schema;
// var toolSchema = new mongoose.Schema({
// 		tool:             {type: Schema.Types.ObjectId, ref: 'Tool'},
// 		weightage:        Number,
// 		targetStudent:    Number,
// 		totalMark:        Number,
// 		totalStud:        {type:Number,default:0},
// 		targetMark:				Number,
// 		studentsAchieved: Number,
// 		toolType:         String,
// 		high:             Number,
// 		mid:              Number,
// 		low:              Number,
// 		point:            Number,
// });

//mongoose.model('ToolData' , toolSchema);
//mongoose.model('ToolDefault',toolSchema);
//module.exports.toolSchema = toolSchema;



module.exports = (Sequelize , sequelize)=>{

	var toolSchema = sequelize.define('tool', {

		_id :{
			type:Sequelize.UUID,
			defaultValue: Sequelize.UUIDV1,
			primaryKey:true
		},
	  tool: {
		  type: Sequelize.STRING,
		  allowNull: false
		},
	  weightage: {
		  type: Sequelize.INTEGER
		} ,
		targetStudent:{
			type : Sequelize.INTEGER
		},
		totalMark :{
			type : Sequelize.INTEGER
		},
		totalStud:{
			type : Sequelize.INTEGER,
			Defaultvalue:0
		},
		targetMark :{
			type : Sequelize.INTEGER
		},
		studentsAchieved: {
		type: Sequelize.INTEGER
		},
		toolType: {
			type: Sequelize.STRING
		} ,
		high:{
			type : Sequelize.INTEGER
		},
		mid :{
			type : Sequelize.INTEGER
		},
		low:{
			type : Sequelize.INTEGER
		},
		point :{
			type : Sequelize.INTEGER,
			Defaultvalue:0
		}
	
	  });
	
	return toolSchema
};
