var express		=	require('express');
var app			=	express();
var mysql		=	require('mysql');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '123',
    database : 'nodejs'
  });

  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

var router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

var bodyParser 	=	require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.use('/', router);

app.get('/login', function(req, res) {
    res.render('login');
});
app.get('/cadastro', function(req, res) {
    res.render('cadastro');
});

app.listen(3000);
console.log('API funcionando! server listening on port ' + app.get('port'));

router.get('/usuarios', (req, res) =>{
    execSQLQuery('SELECT * FROM usuario', res);
})
