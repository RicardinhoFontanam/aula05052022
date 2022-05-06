var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "Lycooper"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO products (name, address) VALUES ?";
  var values = [
    [id: 154, nome: 'Chocolate Heaven'],
    [id: 155, nome: 'Tasty Lemons' ],
    [id: 156, nome: 'Vanilla Dreams' ]
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});