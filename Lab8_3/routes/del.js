var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;



router.get('/', function(req, res, next) {
mongodb.connect("mongodb://127.0.0.1:27017/allLocation", function(err,db){
 if(err) next(err);
 var doc={'name':req.query.name ,'category':req.query.category};
 var result=null;

 db.collection('myLocations').findOne(doc,function(err,doc){
     if(err) next(err);
        if(doc){
        result=doc;
        }
        
 });

 if(result){
 db.collection('myLocations').remove(doc,function(err,docsremoved){
  if(err) next(err);
  res.end("Document has been deleted!")
  console.dir(docsremoved);
 });
 }
else{
    res.end("The document that you are trying to delete is not found!")
}

return db.close();
  // res.render('index', { title: 'Express' });
});

});
module.exports = router;
