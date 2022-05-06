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
  var sql = "INSERT INTO users (name, address) VALUES ?";
  var values = [
    [ id: 1, nome: 'John', favorite_product: 154],
    [ id: 2, nome: 'Peter', favorite_product: 154],
    [ id: 3, nome: 'Amy', favorite_product: 155,
    [ id: 4, nome: 'Hannah', favorite_product:],
    [ id: 5, nome: 'Michael', favorite_product:]
  ];

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});