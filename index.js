var express		=	require('express');
var app			=	express();
var mysql		=	require('mysql');
var connection	=	mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '123',
  database : 'nodejs'
});
var bodyParser 	=	require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.set('port', process.env.PORT || 3000);
app.use('/', router);

app.listen(3000);
console.log('API funcionando! server listening on port ' + app.get('port'));

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('DB conected!');
})

/*connection.query("SELECT * FROM usuario", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});*/