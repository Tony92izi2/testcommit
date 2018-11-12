const express = require('express');
const app = express();
const arangojs = require('arangojs');

const db = require('./config/arango');

var collection = db.collection('users');

doc = {
    firstName: 'foo',
    name: 'bar',
    profession: 'Big BOSS'
  };
 
  collection.save(doc).then(
    meta => console.log('Document saved:', meta._rev),
    err => console.error('Failed to save document:', err)
  );


app.get('/', function (req, res) {
    res.send('Hello World!')
})

collection.document('SecondUser').then(
    doc => console.log('Document:', JSON.stringify(doc, null, 2)),
    err => console.error('Failed to fetch document:', err)
);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!'),
        console.log('http://localhost:3000/')
})