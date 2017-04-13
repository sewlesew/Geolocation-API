var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;



router.get('/', function(req, res, next) {
mongodb.connect("mongodb://127.0.0.1:27017/allLocation", function(err,db){
 if(err) throw err;
 var doc={'name':req.query.name ,'category':req.query.category};
 var newdoc={'$set':{'location.0':req.query.lon,'location.1':req.query.lat}};

 db.collection('myLocations').update(doc,newdoc,function(err,numofupdated){
 if(err) throw err;
  console.dir(numofupdated);
 });

return db.close();
  // res.render('index', { title: 'Express' });
});
});
module.exports = router;
