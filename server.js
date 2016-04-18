var express = require('express');
var app = express();
var router = express.Router();
var authS3O = require('s3o-middleware');
router.use(authS3O);
app.use('/', router);


app.get('/', function (req, res) {
   res.send('Hello World');
})

app.listen(8083)
