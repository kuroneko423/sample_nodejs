var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('port', 3000);
//app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!')
});
app.post('/test', function(req, res){
	console.log(req.body);
    // パラメータ名、nameを出力
    console.log(req.body.name);
    res.status(200);
    if('name' in req.body){
    	console.log('name is exist')
    }
    res.json({"name":"hogehoge"});
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});