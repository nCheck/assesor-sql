var express		= require('express');
var router    = express.Router();
var parser    = require('body-parser');
const dir 		= __dirname;
var coCtrl = require('../controllers/co.ctrlr');
var toolCtrl = require('../controllers/tool.ctrlr');
var subjectCtrl = require('../controllers/subject.ctrl');
var attainCtrl = require('../controllers/attain.ctrlr');





router
  .route('/:subject/:year/cos')
    .get(attainCtrl.getCOPage);


router
  .route('/:subject/:year/cos/:coID')
    .get(attainCtrl.getToolPage);

router
  .route('/calC/:subject/:year/:coID')
  .get(attainCtrl.coattainment);















module.exports=router
