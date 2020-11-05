'use strict';

var express = require('express');
var cors = require('cors');

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});


// {"name":"WhatsApp Image 2020-11-04 at 08.52.15.jpeg","type":"image/jpeg","size":100474}
app.post('/api/fileanalyse', upload.single('upfile'), function(req,res){
  let data = {name:req.file.originalname, type:req.file.mimetype, size:req.file.size}
  res.json(data);
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
