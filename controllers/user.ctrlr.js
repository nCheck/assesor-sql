// var mongoose = require('mongoose');
// var Subject = mongoose.model('Subject');
// var User = mongoose.model('User');
// var Tool=mongoose.model('Tool');


var db = require('../data/db')


///// =========Sends List of All Subjects

// module.exports.getAll = function (req , res) {
// 	console.log('Sending Data');
// 	Subject.find({} , function (err , doc) {
// 		if(err){
// 				console.log("Err in getAll of User.ctrlr");
// 		}
// 		else{
// 			res.send(doc);
// 		}
// 	});

// };

module.exports.getAll = (req ,res )=>{
	console.log('Sending UserData');

	db.User.findAll({})
	.then(usr =>{
		usrs = []
		usr.forEach(ele => {
			usrs.push(ele.dataValues)
		});
		res.send(usrs)
	})
}


//===To display all users =============

module.exports.viewingRegion=(req,res)=>{

		if(req.user.role==='Admin')
			res.redirect('/admin');			//All teachers
		else{
			res.redirect('/dashboard');
		}
	}


/// =======User Creation (useless i suppose)

// module.exports.addOne = (req, res)=> {
// 	User.create({
// 		username : req.body.username,
// 		password : req.body.password,
// 		role : req.body.role,
// 	});
// }

module.exports.addOne = (req, res)=> {
	db.User.create({
		username : req.body.username,
		password : req.body.password,
		role : req.body.role,
	})
	.then(usr=>{
		console.log("Added to DB")
	});
}
