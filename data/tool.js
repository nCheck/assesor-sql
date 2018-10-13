//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

//var toolSchema = new Schema({
//  name : String
//})

//mongoose.model('Tool' , toolSchema);

const Sequelize = require('sequelize');
const sequelize = require('./db')

var toolSchema = sequelize.define('Tool', {

	_id :{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
    name: {
	  type: Sequelize.STRING,
	  allowNull: false
    }
  });

module.exports = toolSchema;
