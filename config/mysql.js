const mysql = require('mysql');
const config = require('./config');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// console.log(env);
module.exports=con;






