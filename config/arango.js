const arangojs = require('arangojs');
const config = require('./config');

const { db: { host, port, name , username, password , env } } = config;
const connectionString = `http://${host}:${port}/`;

 // Connection to ArangoDB
 const db = new arangojs.Database({
    url: connectionString,
    databaseName: name
});
db.useBasicAuth(username, password);

console.log(env);
module.exports=db;






