var express               = require('express');
var parser                = require('body-parser');
var mongoose              = require('mongoose');
var methodOverride				= require('method-override');
const dir                 = __dirname;
var port = process.env.PORT || 2535;
require('./data/db.js');
var User                  = require('./data/user');
// =====Require Routes====
var authroutes            = require('./routes/index');
var adminroutes           = require('./routes/admin');
var dashRoutes            = require('./routes/dashboard');
var uploadRoutes					= require('./routes/upload');
var apiRoutes				  		= require('./routes/api');
var attainRoutes				  = require('./routes/attain');
var fileRoutes				  		= require('./routes/file');
// ======Passport=======
var passport              = require('passport');
var localstrategy         = require('passport-local');
var passportlocalmongoose = require('passport-local-mongoose');
var app		               	=express();
var Tool =mongoose.model('Tool')

// =======initialize data base =======
var Subject = mongoose.model('Subject');
app.set('view engine', 'ejs');
app.use("/public" , express.static(dir + '/public'));
app.use("/uploads" , express.static(dir + '/uploads'));
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(methodOverride("_method"));

// === Passport Setup ===

app.use(require('express-session')({
	secret:'short' ,
	resave:false,
	saveUninitialized:false
}))
//This makes all users available globally to be used in any ejs file
app.use((req,res,next)=>{
	User.find({},(err,user)=>{
		res.locals.user=user;
		next();
	})
})
//This for all subjects
app.use((req,res,next)=>{
	Subject.find({} , function (err , sub) {
		if(err){
				console.log("Err in getAll of Subject.ctrlr");
		}
		else{
			res.locals.subject=sub;
			next();
		}
	});
})
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localstrategy(User.authenticate()));	//User.authenticate present in passportlocal mongoose so no need to define in users.js
passport.serializeUser(User.serializeUser())		//No need to define function User.serializeUser since we used
passport.deserializeUser(User.deserializeUser())	//passport local mongoose it already has those function


// ======= Use Routes=======
app.use('/api',apiRoutes);
app.use(isLoggedIn);
app.use('/',authroutes);
app.use('/dashboard',dashRoutes);
app.use('/admin',adminroutes);
app.use('/upload',uploadRoutes);
app.use('/attain',attainRoutes);
app.use('/files',fileRoutes);


// =====Required Controllers======

var coCtrl     = require('./controllers/co.ctrlr');
var toCtrl     = require('./controllers/tool.ctrlr');
var usercntrlr = require('./controllers/user.ctrlr');




// ========upload page temp==========


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()||req.path==='/login'){
        return next();
    }
    res.redirect("/login");
}
app.listen(port , function () {
	console.log('Site is active on localhost:' + port+'/');
});
